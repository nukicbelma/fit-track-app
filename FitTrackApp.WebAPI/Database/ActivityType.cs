using System;
using System.Collections.Generic;

namespace FitTrackApp.WebAPI.Database
{
    public partial class ActivityType
    {
        public ActivityType()
        {
            Activities = new HashSet<Activity>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<Activity> Activities { get; set; }
    }
}
