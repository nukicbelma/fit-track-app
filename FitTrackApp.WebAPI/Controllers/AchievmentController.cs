using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using FitTrackApp.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitTrackApp.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Authorize]
    public class AchievmentController : Controller
    {
        private readonly IAchievmentService _service;

        public AchievmentController(IAchievmentService service)
        {
            _service = service;
        }

        [HttpGet]
        public List<Achievment> GetAll()
        {
            return _service.GetAll();
        }

        [HttpPost]
        public Achievment Insert([FromBody] AchievmentUpsertDTO request)
        {
            return  _service.Insert(request);
        }

        [HttpPut("{id}")]
        public Achievment Update(int id, [FromBody] AchievmentUpsertDTO request)
        {
            return _service.Update(id, request);
        }
    }
}