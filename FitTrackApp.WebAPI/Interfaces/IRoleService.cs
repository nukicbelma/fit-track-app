using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Models;
using System.Data;

namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IRoleService
    {
        List<Role> GetAll();
        Task<Role> Insert(RoleUpsertDTO request);
        public Role Update(int id, RoleUpsertDTO request);
        Role CheckAdmin(int roleId);
    }
}
