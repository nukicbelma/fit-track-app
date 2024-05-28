using AutoMapper;
using FitTrackApp.WebAPI.DTOs;

namespace FitTrackApp.WebAPI.Mappers
{
    public class FitTrackAppProfile : Profile
    {
        public FitTrackAppProfile()
        {
            //CreateMap<Database.ActivityType, Models.ActivityType>().ReverseMap();


            CreateMap<Database.Activity, Models.Activity>().ReverseMap();


            CreateMap<Database.User, Models.User>().ReverseMap();
            CreateMap<UserUpsertDTO, Database.User>();
            CreateMap<Database.Role, Models.Role>().ReverseMap();
            CreateMap<RoleUpsertDTO, Database.Role>();
            CreateMap<Database.ActivityType, Models.ActivityType>().ReverseMap();
            CreateMap<ActivityTypeUpsertDTO, Database.ActivityType>();
        }
    }
}
