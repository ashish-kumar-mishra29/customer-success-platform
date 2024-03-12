using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateAuditHistoryDto 
    {
        [Required]
        public Guid ProjectId { get; set; }
        public required DateTime Audit { get; set; }
        public required string ReviewedBy { get; set; }
        public required string status { get; set; }
        public required string reviewedSection { get; set; }
        public required string comment { get; set; }
        public required string ActionItem { get; set; }

    }
}
