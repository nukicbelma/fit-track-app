using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Services.Users;

namespace FitTrackApp.WebAPI.Services
{
    public class ActivityTypeService : IActivityTypeService
    {
        private readonly FitTrackContext _context;
        private readonly IMapper _mapper;

        public ActivityTypeService(FitTrackContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public List<Models.ActivityType> GetAll()
        {
            var query = _context.ActivityTypes.AsQueryable();
            var list = query.ToList();
            return _mapper.Map<List<Models.ActivityType>>(list);
        }
        public async Task<bool> CheckIfExits(ActivityTypeUpsertDTO search)
        {
            return !await _context.ActivityTypes.AnyAsync(i => i.Name == search.Name);
        }
        public async Task<Models.ActivityType> Insert(ActivityTypeUpsertDTO request)
        {
            if (await CheckIfExits(request))
            {
                ActivityType entity = _mapper.Map<ActivityType>(request);

                await _context.ActivityTypes.AddAsync(entity);
                await _context.SaveChangesAsync();
                return _mapper.Map<Models.ActivityType>(entity);
            }
            else
                throw new UserException($"Activity type {request.Name} already exits!");
        }
        public Models.ActivityType Update(int id, ActivityTypeUpsertDTO request)
        {
            var entity = _context.ActivityTypes.Find(id);
            _mapper.Map(request, entity);

            _context.SaveChanges();
            return _mapper.Map<Models.ActivityType>(entity);
        }
    }
}
