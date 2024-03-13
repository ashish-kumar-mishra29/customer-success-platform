using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class ProjectDescription : AuditedEntity<Guid>
    {
        [ForeignKey("Project")]
        public Guid ProjectId { get; set; }
        public required string Description { get; set; }
    }
}
