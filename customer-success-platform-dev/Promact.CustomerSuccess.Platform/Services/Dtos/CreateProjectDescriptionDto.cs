using Promact.CustomerSuccess.Platform.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateProjectDescriptionDto
    {
        [Required]
        public required string Name { get; set; }
        public required string Description { get; set; }
       
    }
}
