using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Models;

namespace FitTrackApp.WebAPI.Interfaces
{
    public interface IAuthService
    {
        User Authenticate(UserLoginDTO model);
        Task<bool> Login(UserLoginDTO model);
        Task Logout();
        User GetCurrentUser();
        bool IsLoggedIn();
        Task<User> GetUserByUsername(string username);
    }
}
