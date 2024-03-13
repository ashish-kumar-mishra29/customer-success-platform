using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class StakeHolder : AuditedEntity<Guid>
    {
        [ForeignKey("Project")]
        public Guid ProjectId { get; set; }
        public StakeHolderTitle Title { get; set; }
        public required string  Name { get; set; }
        public required string Contact { get; set; }
    }
}
