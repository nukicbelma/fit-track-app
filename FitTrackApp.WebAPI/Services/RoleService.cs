using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Services.Users;

namespace FitTrackApp.WebAPI.Services
{
    public class RoleService : IRoleService
    {
        private readonly FitTrackContext _context;
        private readonly IMapper _mapper;

        public RoleService(FitTrackContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public List<Models.Role> GetAll()
        {
            var query = _context.Roles.AsQueryable();
            var list = query.ToList();
            return _mapper.Map<List<Models.Role>>(list);
        }
        public async Task<bool> CheckIfExits(RoleUpsertDTO search)
        {
            return !await _context.Roles.AnyAsync(i => i.Name == search.Name);
        }
        public async Task<Models.Role> Insert(RoleUpsertDTO request)
        {
            if (await CheckIfExits(request))
            {
                Role entity = _mapper.Map<Role>(request);

                await _context.Roles.AddAsync(entity);
                await _context.SaveChangesAsync();
                return _mapper.Map<Models.Role>(entity);
            }
            else
                throw new UserException($"Role {request.Name} already exits!");
        }
        public Models.Role Update(int id, RoleUpsertDTO request)
        {
            var entity = _context.Roles.Find(id);
            _mapper.Map(request, entity);

            _context.SaveChanges();
            return _mapper.Map<Models.Role>(entity);
        }

        public Models.Role CheckAdmin(int RoleId)
        {
            
            var list = _context.Roles.ToList();
            Models.Role result = new Models.Role();

            foreach (var item in list)
            {
                if (item.Id == RoleId)
                {
                    if (item.Name.Contains("Admin"))
                    {
                        result.Id = item.Id;
                        result.Name = item.Name;

                        return result;
                    }
                }
            }
            return null;
        }
    }
}
