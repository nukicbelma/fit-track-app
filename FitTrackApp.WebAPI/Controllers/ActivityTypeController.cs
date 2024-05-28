using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using FitTrackApp.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FitTrackApp.WebAPI.Controllers
{
        [ApiController]
        [Route("[controller]")]
        //[Authorize]
        public class ActivityTypeController : Controller
        {
            private readonly IActivityTypeService _service;

            public ActivityTypeController(IActivityTypeService service)
            {
                _service = service;
            }

            [HttpGet]
            public List<ActivityType> GetAll()
            {
                return _service.GetAll();
            }

            [HttpPost]
            public async Task<ActivityType> Insert([FromBody] ActivityTypeUpsertDTO request)
            {
                return await _service.Insert(request);
            }

        [HttpPut("{id}")]
        public  ActivityType Update(int id, [FromBody] ActivityTypeUpsertDTO request)
        {
            return _service.Update(id, request);
        }
    }
}