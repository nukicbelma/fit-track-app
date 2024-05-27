
namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IBaseCRUDService<TModel, Tsearch, TInsert, TUpdate> : IBaseService<TModel, Tsearch>
    {
        TModel Insert(TInsert request);

        TModel Update(int id, TUpdate request);
        void Delete(int id);
    }
}
