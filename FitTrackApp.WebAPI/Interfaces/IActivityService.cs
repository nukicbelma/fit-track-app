using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Models;

namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IActivityService
    {
        List<Activity> GetAll(ActivitySearchDTO request);
        Activity GetById(int id);
        public Activity Insert(ActivityUpsertDTO request);
        public Activity Update(int id, ActivityUpsertDTO request);
        Task<bool> Delete(int id);
    }
}
