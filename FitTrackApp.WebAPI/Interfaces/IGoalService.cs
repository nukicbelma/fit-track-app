using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Models;

namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IGoalService
    {
        List<Goal> GetAll();
        Goal GetById(int id);
        public Goal Insert(GoalUpsertDTO request);
        public Goal Update(int id, GoalUpsertDTO request);
        Task<bool> Delete(int id);
    }
}
