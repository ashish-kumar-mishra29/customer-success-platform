using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateRiskProfileDto
    {
        [Required]
        [StringLength(100)]
        public required string Name { get; set; }
        public required string Contact { get; set; }
    }
}
