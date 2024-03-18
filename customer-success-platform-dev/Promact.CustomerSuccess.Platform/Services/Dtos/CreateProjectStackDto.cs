namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateProjectStackDto
    {
        public Guid ProjectId { get; set; }
        public required string Technology { get; set; }
    }
}
