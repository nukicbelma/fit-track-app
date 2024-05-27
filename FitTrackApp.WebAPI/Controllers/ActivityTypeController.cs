using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;

namespace FitTrackApp.WebAPI.Controllers
{
    public class ActivityTypeController : BaseController<ActivityTypeDTO, object>
    {
        public ActivityTypeController(IBaseService<ActivityTypeDTO, object> service) : base(service)
        {
        }
    }
}