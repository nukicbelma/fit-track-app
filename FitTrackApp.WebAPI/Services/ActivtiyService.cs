using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;

namespace FitTrackApp.WebAPI.Services
{
    public class ActivityService : IActivityService
    {
        private readonly IMapper _mapper;
        private readonly IAuthService _authService;
        private readonly FitTrackContext _context;

        public ActivityService(FitTrackContext context, IMapper mapper, IAuthService authService)
        {
            _context = context;
            _mapper = mapper;
            _authService = authService;
        }
        public List<Models.Activity> GetAll(ActivitySearchDTO search)
        {
            var query = _context.Activities.AsQueryable();

            //get activities by loggedin user
            var loggedInUser = _authService.GetCurrentUser().Id;
            if ((!string.IsNullOrWhiteSpace((loggedInUser).ToString())) && loggedInUser != 0)
            {
                query = query.Where(x => x.UserId == loggedInUser);
            }

            if (!string.IsNullOrWhiteSpace(search?.Name))
            {
                query = query.Where(x => x.Name.ToLower().StartsWith(search.Name.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(search?.Description))
            {
                query = query.Where(x => x.Description.ToLower().StartsWith(search.Description.ToLower()));
            }
            if ((!string.IsNullOrWhiteSpace((search?.ActivityTypeId).ToString())) && search?.ActivityTypeId != 0)
            {
                query = query.Where(x => x.ActivityTypeId == search.ActivityTypeId);
            }
            if ((!string.IsNullOrWhiteSpace((search?.StartDate).ToString())) && search?.StartDate != null)
            {
                query = query.Where(x => x.StartDate == search.StartDate);
            }

            var list = query.ToList();

            return _mapper.Map<List<Models.Activity>>(list);
        }

        public List<Models.Activity> GetAllByUser(int userId)
        {
            var query = _context.Activities.AsQueryable();

            if ((!string.IsNullOrWhiteSpace((userId).ToString())) && userId != 0)
            {
                query = query.Where(x => x.UserId == userId);
            }

            var list = query.ToList();
            return _mapper.Map<List<Models.Activity>>(list);
        }

        public Models.Activity GetById(int id)
        {
            var entity = _context.Activities.Find(id);
            return _mapper.Map<Models.Activity>(entity);
        }

        public Models.Activity Insert(ActivityUpsertDTO request)
        {
            var userId = _authService.GetCurrentUser().Id;
            if (userId == null)
            {
                throw new Exception("User is not logged in.");
            }
            request.UserId = userId;

            Activity entity = _mapper.Map<Activity>(request);

            _context.Activities.Add(entity);
            _context.SaveChanges();

            return _mapper.Map<Models.Activity>(entity);
        }

        public Models.Activity Update(int id, ActivityUpsertDTO request)
        {
            var entity = _context.Activities.Where(x => x.Id == id).FirstOrDefault();

            var userId = _authService.GetCurrentUser().Id;
            if (userId == null)
            {
                throw new Exception("User is not logged in.");
            }
            request.UserId = userId;

            _context.Activities.Attach(entity);
            _context.Activities.Update(entity);

            _mapper.Map(request, entity);
            _context.SaveChanges();

            return _mapper.Map<Models.Activity>(entity);
        }
        public virtual async Task<bool> Delete(int id)
        {
            var entity = await _context.Set<Activity>().FindAsync(id);
            try
            {
                _context.Set<Activity>().Remove(entity);
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
