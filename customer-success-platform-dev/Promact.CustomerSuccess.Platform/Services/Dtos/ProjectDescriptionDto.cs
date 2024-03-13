using Promact.CustomerSuccess.Platform.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class ProjectDescriptionDto : IEntityDto<Guid>
    {
        [ForeignKey("Project")]
        public Guid ProjectId { get; set; }
        public Guid Id { get; set; }
        public string Description { get; set; }

        
    }
}
