using System;
using System.Collections.Generic;

namespace FitTrackApp.WebAPI.Entities
{
    public partial class Activity
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public DateTime? StartDate { get; set; }
        public double? Duration { get; set; }
        public int? ActivityTypeId { get; set; }

        public virtual ActivityType? ActivityType { get; set; }
    }
}
