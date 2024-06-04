using AutoMapper;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using FitTrackApp.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _service;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;

        public AuthController(IMapper mapper, IHttpContextAccessor httpContextAccessor, IUserService service)
        {
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
            _service = service;

        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public ActionResult<User> Login([FromBody] UserLoginDTO request)
        {
            return _service.Login(request, _httpContextAccessor.HttpContext);
        }

    }
}
