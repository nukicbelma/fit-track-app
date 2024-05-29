using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Helpers;
using FitTrackApp.WebAPI.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FitTrackApp.WebAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IMapper _mapper;
        private readonly FitTrackContext _context;

        public UserService(FitTrackContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public List<Models.User> GetAll(UserSearchDTO search)
        {
            var query = _context.Users.AsQueryable();

            if (!string.IsNullOrWhiteSpace(search?.FirstName))
            {
                query = query.Where(x => x.FirstName.ToLower().StartsWith(search.FirstName.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(search?.LastName))
            {
                query = query.Where(x => x.LastName.ToLower().StartsWith(search.LastName.ToLower()));
            }
            var list = query.ToList();

            return _mapper.Map<List<Models.User>>(list);
        }
        public Models.User GetById(int id)
        {
            var entity = _context.Users.Find(id);

            return _mapper.Map<Models.User>(entity);

        }
        public Models.User Insert(UserUpsertDTO request)
        {
            Database.User entity = _mapper.Map<Database.User>(request);



            if (request.Password != request.PasswordConfirm)
            {
                throw new Exception("Passwords do not match.");
            }

            entity.PasswordSalt = HashGenerator.GenerateSalt();
            entity.PasswordHash = HashGenerator.GenerateHash(entity.PasswordSalt, request.Password);

            _context.Users.Add(entity);
            _context.SaveChanges();

            return _mapper.Map<Models.User>(entity);
        }

        public Models.User Update(int id, UserUpsertDTO request)
        {
            var entity = _context.Users.Where(x => x.Id == id).FirstOrDefault();
            if (!string.IsNullOrWhiteSpace(request.Password))
            {
                if (request.Password != request.PasswordConfirm)
                {
                    throw new Exception("Passwords do not match.");
                }
                entity.PasswordSalt = HashGenerator.GenerateSalt();
                entity.PasswordHash = HashGenerator.GenerateHash(entity.PasswordSalt, request.Password);
            }

            _context.Users.Attach(entity);
            _context.Users.Update(entity);
            _mapper.Map(request, entity);
            _context.SaveChanges();

            return _mapper.Map<Models.User>(entity);
        }

        public Models.User Authenticate(UserLoginDTO request)
        {
            var user = _context.Users.Include(e => e.Role).FirstOrDefault(x => x.Username == request.Username);

            if (user != null)
            {
                var newHash = HashGenerator.GenerateHash(user.PasswordSalt, request.Password);

                if (user.PasswordHash == newHash)
                {
                    return _mapper.Map<Models.User>(user);
                }
            }
            return null;
        }
    }
}
