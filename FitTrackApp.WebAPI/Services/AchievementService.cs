using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;

namespace FitTrackApp.WebAPI.Services
{
    public class AchievementService : IAchievementService
    {
        private readonly FitTrackContext _context;
        private readonly IMapper _mapper;
        private readonly IAuthService _authService;
        public AchievementService(FitTrackContext context, IMapper mapper, IAuthService authService)
        {
            _context = context;
            _mapper = mapper;
            _authService = authService;
        }
        public List<Models.Achievement> GetAll()
        {
            var query = _context.Achievements.AsQueryable();

            //get achievements by loggedin user
            var loggedInUser = _authService.GetCurrentUser().Id;
            if ((!string.IsNullOrWhiteSpace((loggedInUser).ToString())) && loggedInUser != 0)
            {
                 query = from achievement in _context.Achievements
                            join goal in _context.Goals on achievement.GoalId equals goal.Id
                            where goal.UserId == loggedInUser
                            select achievement;
            }
           
            var list = query.ToList();
            return _mapper.Map<List<Models.Achievement>>(list);
        }

        public async Task<Models.Achievement> Insert(AchievementUpsertDTO request)
        {
            var achievementEntity = _mapper.Map<Achievement>(request);
            var goalEntity = await _context.Goals.FindAsync(achievementEntity.GoalId);

            if (goalEntity == null)
            {
                throw new Exception($"Goal with ID {achievementEntity.GoalId} not found.");
            }

            SetAchievementStatus(achievementEntity, goalEntity);

            await _context.Achievements.AddAsync(achievementEntity);
            await _context.SaveChangesAsync();

            return _mapper.Map<Models.Achievement>(achievementEntity);
        }

        public Models.Achievement Update(int id, AchievementUpsertDTO request)
        {
            var entity = _context.Achievements.Find(id);
            _mapper.Map(request, entity);

            Goal goal = _context.Goals.FirstOrDefault(g => g.Id == entity.GoalId);
            SetAchievementStatus(entity, goal);

            _context.SaveChanges();
            return _mapper.Map<Models.Achievement>(entity);
        }

        public void SetAchievementStatus(Achievement achievement, Goal goal)
        {
            if (goal == null || achievement == null)
            {
                throw new ArgumentNullException("Goal or Achievement cannot be null");
            }

            bool isAchieved = (achievement.AchievedTime.HasValue && goal.Duration.HasValue && achievement.AchievedTime.Value <= goal.Duration.Value) ||
                              (achievement.AchievedFrequency.HasValue && goal.Frequency.HasValue && achievement.AchievedFrequency.Value >= goal.Frequency.Value);
            achievement.Achieved = isAchieved;
        }
    }
}
