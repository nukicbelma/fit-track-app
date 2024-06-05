using System;
using System.Collections.Generic;

namespace FitTrackApp.WebAPI.Database
{
    public partial class Achievement
    {
        public int Id { get; set; }
        public int? GoalId { get; set; }
        public DateTime? Date { get; set; }
        public int? AchievedTime { get; set; }
        public int? AchievedFrequency { get; set; }
        public bool? Achieved { get; set; }

        public virtual Goal? Goal { get; set; }
    }
}
