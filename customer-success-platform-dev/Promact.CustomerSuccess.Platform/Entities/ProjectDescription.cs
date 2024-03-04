using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class ProjectDescription : AuditedEntity<Guid>
    {
        public required string Name { get; set; }
        public required string Description { get; set; }
    }
}
