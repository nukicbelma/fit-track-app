using System;
using System.Collections.Generic;

namespace FitTrackApp.WebAPI.Database
{
    public partial class Activity
    {
        public Activity()
        {
            Goals = new HashSet<Goal>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public DateTime? StartDate { get; set; }
        public double? Duration { get; set; }
        public int? ActivityTypeId { get; set; }
        public int? UserId { get; set; }

        public virtual ActivityType? ActivityType { get; set; }
        public virtual User? User { get; set; }
        public virtual ICollection<Goal> Goals { get; set; }
    }
}
