using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FitTrackApp.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class GoalController : ControllerBase
    {
        private readonly IGoalService _service;
        public GoalController(IGoalService service)
        {
            _service = service;
        }

        [HttpGet]
        public List<Models.Goal> GetAll()
        {
            return _service.GetAll();
        }

        [HttpGet("{id}")]
        public Models.Goal GetById(int id)
        {
            return _service.GetById(id);
        }

        [HttpPost]
        public void Insert(GoalUpsertDTO request)
        {
            _service.Insert(request);
        }

        [HttpPut("{id}")]
        public void Update(int id, [FromBody] GoalUpsertDTO request)
        {
            _service.Update(id, request);
        }

        [HttpDelete("{id}")]
        public async Task<bool> Delete(int id)
        {
            return await _service.Delete(id);
        }
    }
}
