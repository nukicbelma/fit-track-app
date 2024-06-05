using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using Microsoft.VisualStudio.Services.Users;

namespace FitTrackApp.WebAPI.Services
{
    public class AchievmentService : IAchievmentService
    {
        private readonly FitTrackContext _context;
        private readonly IMapper _mapper;

        public AchievmentService(FitTrackContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public List<Models.Achievment> GetAll()
        {
            var query = _context.Achievements.AsQueryable();
            var list = query.ToList();
            return _mapper.Map<List<Models.Achievment>>(list);
        }

        public Models.Achievment Insert(AchievmentUpsertDTO request)
        {
              Achievement entity = _mapper.Map<Achievement>(request);

               _context.Achievements.AddAsync(entity);
               _context.SaveChangesAsync();
               return _mapper.Map<Models.Achievment>(entity);
        }
        public Models.Achievment Update(int id, AchievmentUpsertDTO request)
        {
            var entity = _context.Achievements.Find(id);
            _mapper.Map(request, entity);

            _context.SaveChanges();
            return _mapper.Map<Models.Achievment>(entity);
        }
    }
}
