using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateAuditHistoryDto
    {
        [Required]
        [StringLength(50)]
        public required DateTime Audit { get; set; }
        public required string ReviewedBy { get; set; }
        public required string status { get; set; }
        public required string reviewedSection { get; set; }
        public required string comment { get; set; }
        public required string ActionItem { get; set; }
    }
}
