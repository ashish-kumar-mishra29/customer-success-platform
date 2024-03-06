namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class EmailDto
    {
        public string to_email { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
    }
}
