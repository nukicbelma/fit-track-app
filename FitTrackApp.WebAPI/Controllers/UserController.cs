using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Interfaces;
using FitTrackApp.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitTrackApp.WebAPI.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            return _service.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetById(int id)
        {
            return _service.GetById(id);
        }

        [HttpPost]
        public ActionResult<User> Insert(UserUpsertDTO request)
        {
            return _service.Insert(request);
        }

        [HttpPut("{id}")]
        public ActionResult<User> Update(int id, [FromBody] UserUpsertDTO request)
        {
            return _service.Update(id, request);
        }
    }
}
