using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class AuditHistory :AuditedEntity<Guid>
    {
        public required DateTime Audit { get; set; }
        public required string ReviewedBy {  get; set; }
        public required string status { get; set; }
        public required string reviewedSection {get;set; }
        public required string comment { get; set; }    
        public required string ActionItem {  get; set; }

    }
}
