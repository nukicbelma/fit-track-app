using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FitTrackApp.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class ActivityController : ControllerBase
    {
        private readonly IActivityService _service;
        public ActivityController(IActivityService service)
        {
            _service = service;
        }

        [HttpGet]
        public List<Models.Activity> Get([FromQuery] ActivitySearchDTO search)
        {
            return _service.GetAll(search);
        }

        [HttpGet("{id}")]
        public Models.Activity GetById(int id)
        {
            return _service.GetById(id);
        }

        [HttpPost]
        public void Insert(ActivityUpsertDTO request)
        {
            _service.Insert(request);
        }

        [HttpPut("{id}")]
        public void Update(int id, [FromBody] ActivityUpsertDTO request)
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
