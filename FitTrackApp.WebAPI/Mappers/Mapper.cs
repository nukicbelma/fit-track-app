using AutoMapper;
using FitTrackApp.WebAPI.DTOs;
using FitTrackApp.WebAPI.Entities;

namespace FitTrackApp.WebAPI.Mappers
{
    public class Mapper : Profile
    {
        public Mapper()
        {
            CreateMap<ActivityType, ActivityTypeDTO>().ReverseMap();
            CreateMap<Activity, ActivityDTO>().ReverseMap();
            CreateMap<User, UserDTO>().ReverseMap();
        }
    }
}
