using System;
using System.Collections.Generic;

namespace FitTrackApp.WebAPI.Database
{
    public partial class Role
    {
        public Role()
        {
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Details { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
