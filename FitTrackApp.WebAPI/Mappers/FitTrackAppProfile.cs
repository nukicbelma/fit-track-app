using AutoMapper;
using FitTrackApp.WebAPI.DTOs;
using Microsoft.AspNetCore.Identity;

namespace FitTrackApp.WebAPI.Mappers
{
    public class FitTrackAppProfile : Profile
    {
        public FitTrackAppProfile()
        {
            CreateMap<Database.Activity, Models.Activity>().ReverseMap();
            CreateMap<ActivityUpsertDTO, Database.Activity>();
            CreateMap<ActivitySearchDTO, Database.Activity>();


            CreateMap<Database.Role, Models.Role>().ReverseMap();
            CreateMap<RoleUpsertDTO, Database.Role>();

            CreateMap<Database.ActivityType, Models.ActivityType>().ReverseMap();
            CreateMap<ActivityTypeUpsertDTO, Database.ActivityType>();

            CreateMap<Database.User, Models.User>().ReverseMap();
            CreateMap<UserUpsertDTO, Database.User>();
            CreateMap<UserLoginDTO, Database.User>();
            CreateMap<UserSearchDTO, Database.User>();


            CreateMap<Database.Goal, Models.Goal>().ReverseMap();
            CreateMap<GoalUpsertDTO, Database.Goal>();

            CreateMap<Database.Achievement, Models.Achievment>().ReverseMap();
            CreateMap<AchievmentUpsertDTO, Database.Achievement>();

        }
    }
}
