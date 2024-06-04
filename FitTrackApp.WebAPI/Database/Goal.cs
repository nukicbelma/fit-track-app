using System;
using System.Collections.Generic;

namespace FitTrackApp.WebAPI.Database
{
    public partial class Goal
    {
        public int Id { get; set; }
        public int ActivityId { get; set; }
        public int UserId { get; set; }
        public string DurationUnit { get; set; } = null!;
        public int? Duration { get; set; }
        public int? Frequency { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }

        public virtual Activity Activity { get; set; } = null!;
        public virtual User User { get; set; } = null!;
    }
}
