using FitTrackApp.WebAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace FitTrackApp.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseCRUDController<TModel, Tsearch, TInsert, TUpdate> : BaseController<TModel, Tsearch>
    {
        protected readonly IBaseCRUDService<TModel, Tsearch, TInsert, TUpdate> _service = null;

        public BaseCRUDController(IBaseCRUDService<TModel, Tsearch, TInsert, TUpdate> service) : base(service)
        {
            _service = service;
        }

        [HttpPost]
        public TModel Insert(TInsert request)
        {
            return _service.Insert(request);
        }

        [HttpPut("{id}")]
        public TModel Update(int id, TUpdate request)
        {
            return _service.Update(id, request);
        }

        [HttpDelete]
        void Delete(int id)
        {
            _service.Delete(id);
        }
    }
}
