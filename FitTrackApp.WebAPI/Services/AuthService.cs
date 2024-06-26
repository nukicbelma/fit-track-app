using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Helpers;
using FitTrackApp.WebAPI.Interfaces;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace FitTrackApp.WebAPI.Services
{
    public class AuthService : IAuthService
    {
        private readonly IMapper _mapper;
        private readonly FitTrackContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AuthService(IHttpContextAccessor httpContextAccessor, FitTrackContext context, IMapper mapper)
        {
            _httpContextAccessor = httpContextAccessor;
            _context = context;
            _mapper = mapper;
        }

        public Models.User Authenticate(UserLoginDTO request)
        {
            var user = _context.Users
                .Include(e => e.Role)
                .FirstOrDefault(x => x.Username == request.Username);

            if (user == null)
            {
                return null;
            }

            var newHash = HashGenerator.GenerateHash(user.PasswordSalt, request.Password);

            if (user.PasswordHash != newHash)
            {
                return null;
            }

            return _mapper.Map<Models.User>(user);
        }

        public async Task<bool> Login(UserLoginDTO request)
        {
            var user = Authenticate(request);
            if (user == null)
            {
                return false;
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

            var authProperties = new AuthenticationProperties
            {
                IsPersistent = true,
                ExpiresUtc = DateTimeOffset.UtcNow.AddHours(1)
            };

            await _httpContextAccessor.HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), authProperties);
            return true;
        }

        public async Task Logout()
        {
            await _httpContextAccessor.HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }

        public Models.User GetCurrentUser()
        {
            var username = _httpContextAccessor.HttpContext.User.Identity.Name;
            if (string.IsNullOrEmpty(username))
            {
                return null;
            }

            var user = _context.Users.FirstOrDefault(u => u.Username == username);
            return _mapper.Map<Models.User>(user);
        }

        public async Task<bool> IsLoggedIn()
        {
            var result = await _httpContextAccessor.HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return result.Succeeded;
        }

        public async Task<Models.User> GetUserByUsername(string username)
        {
            if (string.IsNullOrEmpty(username))
            {
                throw new ArgumentException("Username cannot be null or empty", nameof(username));
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == username);

            return _mapper.Map<Models.User>(user);
        }
    }
}
