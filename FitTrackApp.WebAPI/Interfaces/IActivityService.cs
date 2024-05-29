using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Models;

namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IActivityService
    {
        List<Activity> GetAll(ActivitySearchDTO request);
        //List<Activity> GetAllByUser(int userId);
        Task<Activity> Insert(ActivityUpsertDTO request);
        public Activity Update(int id, ActivityUpsertDTO request);
    }
}
