namespace FitTrackApp.WebAPI.DTOs
{
    public class GoalUpsertDTO
    {
        public int Id { get; set; }
        public int ActivityId { get; set; }
        public int UserId { get; set; }
        public string DurationUnit { get; set; } = null!;
        public int? Duration { get; set; }
        public int? Frequency { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }

    }
}
