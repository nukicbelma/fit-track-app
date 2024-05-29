namespace FitTrackApp.WebAPI.DTOs
{
    public class UserUpsertDTO
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Username { get; set; } = null!;
        public DateTime BirthDate { get; set; }
        public string? Phone { get; set; }
        public string Email { get; set; } = null!;
        public string Password { get; set; }
        public string PasswordConfirm { get; set; }
        public string? Image { get; set; }
        public string? Info { get; set; }
        public double? Height { get; set; }
        public double? Weight { get; set; }
        public string? Gender { get; set; }
        public bool? Active { get; set; }
    }
}
