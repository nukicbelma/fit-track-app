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
        private readonly IAuthService _authService;

        public GoalService(FitTrackContext context, IMapper mapper, IAuthService authService)
        {
            _context = context;
            _mapper = mapper;
            _authService = authService;
        }
        public List<Models.Goal> GetAll()
        {
            var query = _context.Goals.AsQueryable();

            //get goals by loggedin user
            var loggedInUser = _authService.GetCurrentUser().Id;
            if ((!string.IsNullOrWhiteSpace((loggedInUser).ToString())) && loggedInUser != 0)
            {
                query = query.Where(x => x.UserId == loggedInUser);
            }

            var list = query.ToList();

            return _mapper.Map<List<Models.Goal>>(list);
        }

        public Models.Goal GetById(int id)
        {
            var entity = _context.Goals.Find(id);
            return _mapper.Map<Models.Goal>(entity);
        }

        public Models.Goal Insert(GoalUpsertDTO request)
        {

            var userId = _authService.GetCurrentUser().Id;
            if (userId == null)
            {
                throw new Exception("User is not logged in.");
            }
            request.UserId = userId;

            Goal entity = _mapper.Map<Goal>(request);

            _context.Goals.Add(entity);
            _context.SaveChanges();

            return _mapper.Map<Models.Goal>(entity);
        }

        public Models.Goal Update(int id, GoalUpsertDTO request)
        {
            var entity = _context.Goals.Where(x => x.Id == id).FirstOrDefault();
            
            var userId = _authService.GetCurrentUser().Id;
            if (userId == null)
            {
                throw new Exception("User is not logged in.");
            }
            request.UserId = userId;

            _mapper.Map(request, entity); 

            _context.Goals.Update(entity);
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
