using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateRiskProfileDto
    {
        [Required]
        public required string Name { get; set; }
        public required string Contact { get; set; }
    }
}
