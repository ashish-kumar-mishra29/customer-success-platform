using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class StakeHolder : AuditedEntity<Guid>
    {
        public StakeHolderTitle Title { get; set; }
        public required string  Name { get; set; }
        public required string Contact { get; set; }
    }
}
