using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;

namespace FitTrackApp.WebAPI.Services
{
    public class GoalService : IGoalService
    {
        private readonly IMapper _mapper;
        private readonly FitTrackContext _context;

        public GoalService(FitTrackContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public List<Models.Goal> GetAll()
        {
            var query = _context.Goals.AsQueryable();
            var list = query.ToList();

            return _mapper.Map<List<Models.Goal>>(list);
        }

        public List<Models.Goal> GetAllByUser(int userId)
        {
            var query = _context.Goals.AsQueryable();

            if ((!string.IsNullOrWhiteSpace((userId).ToString())) && userId != 0)
            {
                query = query.Where(x => x.UserId == userId);
            }

            var list = query.ToList();
            return _mapper.Map<List<Models.Goal>>(list);
        }

        public async Task<Models.Goal> Insert(GoalUpsertDTO request)
        {
            Goal entity = _mapper.Map<Goal>(request);

            //dodaj entity.userId = loggedUser.Id
            _context.Goals.Add(entity);
            _context.SaveChanges();

            return _mapper.Map<Models.Goal>(entity);
        }

        public Models.Goal Update(int id, GoalUpsertDTO request)
        {
            var entity = _context.Goals.Where(x => x.Id == id).FirstOrDefault();

            //dodaj entity.userId = loggedUser.Id
            _context.Goals.Attach(entity);
            _context.Goals.Update(entity);

            _mapper.Map(request, entity);
            _context.SaveChanges();

            return _mapper.Map<Models.Goal>(entity);
        }

        public virtual async Task<bool> Delete(int id)
        {
            var entity = await _context.Set<Goal>().FindAsync(id);
            try
            {
                _context.Set<Goal>().Remove(entity);
                await _context.SaveChangesAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
