using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using FitTrackApp.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FitTrackApp.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class AchievmentController : Controller
    {
        private readonly IAchievementService _service;

        public AchievmentController(IAchievementService service)
        {
            _service = service;
        }

        [HttpGet]
        public List<Achievement> GetAll()
        {
            return _service.GetAll();
        }

        [HttpPost]
        public async Task<Achievement> Insert([FromBody] AchievementUpsertDTO request)
        {
            return await _service.Insert(request);
        }

        [HttpPut("{id}")]
        public Achievement Update(int id, [FromBody] AchievementUpsertDTO request)
        {
            return _service.Update(id, request);
        }
    }
}