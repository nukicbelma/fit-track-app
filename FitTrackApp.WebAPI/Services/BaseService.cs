using AutoMapper;
using FitTrackApp.WebAPI.Database;
using FitTrackApp.WebAPI.Interfaces;

namespace FitTrackApp.WebAPI.Services
{
    public class BaseService<TModel, Tsearch, TDatabase> : IBaseService<TModel, Tsearch> where TDatabase : class
    {
        protected readonly FitTrackContext _context;
        protected readonly IMapper _mapper;

        public BaseService(FitTrackContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public virtual List<TModel> Get(Tsearch search)
        {
            return _mapper.Map<List<TModel>>(_context.Set<TDatabase>().ToList());
        }

        public virtual TModel GetByID(int id)
        {
            return _mapper.Map<TModel>(_context.Set<TDatabase>().Find(id));
        }
    }
}
