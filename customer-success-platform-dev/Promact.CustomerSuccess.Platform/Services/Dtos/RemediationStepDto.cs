using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class RemediationStepDto : EntityDto<Guid>
    {
        
        public string Description { get; set; }

        [ForeignKey("RiskProfile")]
        public Guid RiskProfileId { get; set; }

        public virtual RiskProfileDto RiskProfile { get; set; }
    }
}
