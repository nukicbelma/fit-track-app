using System;
using System.Collections.Generic;

namespace FitTrackApp.WebAPI.Database
{
    public partial class User
    {
        public User()
        {
            Activities = new HashSet<Activity>();
            Goals = new HashSet<Goal>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Username { get; set; } = null!;
        public DateTime BirthDate { get; set; }
        public string? Phone { get; set; }
        public string Email { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public string PasswordSalt { get; set; } = null!;
        public string? Image { get; set; }
        public string? Info { get; set; }
        public double? Height { get; set; }
        public double? Weight { get; set; }
        public string? Gender { get; set; }
        public bool? Active { get; set; }
        public int? RoleId { get; set; }

        public virtual Role? Role { get; set; }
        public virtual ICollection<Activity> Activities { get; set; }
        public virtual ICollection<Goal> Goals { get; set; }
    }
}
