using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Models;

namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IAchievementService
    {
        List<Achievement> GetAll();
        Task<Achievement> Insert(AchievementUpsertDTO request);
        public Achievement Update(int id, AchievementUpsertDTO request);
    }
}
