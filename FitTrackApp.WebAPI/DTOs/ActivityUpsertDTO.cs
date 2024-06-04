namespace FitTrackApp.WebAPI.DTOs
{
    public class ActivityUpsertDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public DateTime? StartDate { get; set; }
        public double? Duration { get; set; }
        public int? ActivityTypeId { get; set; }
        public int? UserId { get; set; }
    }
}
