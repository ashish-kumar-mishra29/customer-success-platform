using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateRiskProfileDto
    {
        [Required]
        [StringLength(50)]
        public required string Name { get; set; }
        public required string Contact { get; set; }
    }
}
