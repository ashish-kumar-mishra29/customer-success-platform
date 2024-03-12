using Microsoft.AspNetCore.Mvc.ActionConstraints;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class AuditHistory : AuditedAggregateRootWithUser<Guid, ApplicationUser>
    {
        [ForeignKey(nameof(Project))]
        public Guid ProjectId { get; set; }
        public virtual Project? Project { get; set; }
        public required DateTime Audit { get; set; }
        public required string ReviewedBy {  get; set; }
        public required string status { get; set; }
        public required string reviewedSection {get;set; }
        public required string comment { get; set; }    
        public required string ActionItem {  get; set; }

    }
}
