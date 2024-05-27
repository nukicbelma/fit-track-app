namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IBaseService<TModel, Tsearch>
    {
        List<TModel> Get(Tsearch search);
        TModel GetByID(int id);
    }
}
