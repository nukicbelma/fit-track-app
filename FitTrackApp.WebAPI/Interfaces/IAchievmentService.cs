using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Models;

namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IAchievmentService
    {
        List<Achievment> GetAll();
        public Achievment Insert(AchievmentUpsertDTO request);
        public Achievment Update(int id, AchievmentUpsertDTO request);
    }
}
