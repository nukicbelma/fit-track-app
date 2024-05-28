using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Models;

namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IActivityTypeService
    {
        List<ActivityType> GetAll();
        Task<ActivityType> Insert(ActivityTypeUpsertDTO request);
        public ActivityType Update(int id, ActivityTypeUpsertDTO request);
    }
}
