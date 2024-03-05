using Promact.CustomerSuccess.Platform.Entities;
using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateStakeHolderDto
    {
        [Required]
        
        
        public required string Name { get; set; }
        public required string Contact { get; set; }
    }
}
