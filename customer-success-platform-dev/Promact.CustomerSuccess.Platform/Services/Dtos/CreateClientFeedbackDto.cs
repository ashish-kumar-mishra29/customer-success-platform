using System.ComponentModel.DataAnnotations.Schema;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateClientFeedbackDto
    {
        [ForeignKey("Project")]
        public Guid ProjectId { get; set; }
        public DateTime FeedbackDate { get; set; }
        public FeedbackType FeedbackType { get; set; }
        public required string ActionTaken { get; set; }
        public DateTime ClosureDate { get; set; }
        public string Details { get; set; }
    }
}
