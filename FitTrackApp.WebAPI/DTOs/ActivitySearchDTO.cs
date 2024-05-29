namespace FitTrackApp.WebAPI.DTOs
{
    public class ActivitySearchDTO
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public DateTime? StartDate { get; set; }
        public int? ActivityTypeId { get; set; }
    }
}
