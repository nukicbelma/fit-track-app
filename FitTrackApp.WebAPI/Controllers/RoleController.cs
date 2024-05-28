using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using FitTrackApp.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace FitTrackApp.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Authorize]
    public class RoleController : Controller
    {
        private readonly IRoleService _service;

        public RoleController(IRoleService service)
        {
            _service = service;
        }

        [HttpGet]
        public List<Role> GetAll()
        {
            return _service.GetAll();
        }

        [HttpPost]
        public async Task<Role> Insert([FromBody] RoleUpsertDTO request)
        {
            return await _service.Insert(request);
        }

        [HttpGet]
        [Route("CheckAdmin/{RoleId}")]
        public Role CheckAdmin(int RoleId)
        {
            return _service.CheckAdmin(RoleId);
        }
    }
}
