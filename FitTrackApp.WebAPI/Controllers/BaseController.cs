using FitTrackApp.WebAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FitTrackApp.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController<TModel, Tsearch> : Controller
    {
        protected readonly IBaseService<TModel, Tsearch> _service;

        public BaseController(IBaseService<TModel, Tsearch> service)
        {
            _service = service;
        }

        [HttpGet]
        public List<TModel> Get([FromQuery] Tsearch search)
        {
            return _service.Get(search);
        }


        [HttpGet("{id}")]
        public TModel GetById(int id)
        {
            return _service.GetByID(id);
        }
    }
}
