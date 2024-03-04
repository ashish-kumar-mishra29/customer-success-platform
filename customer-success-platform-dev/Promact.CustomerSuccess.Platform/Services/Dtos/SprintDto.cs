using Promact.CustomerSuccess.Platform.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class SprintDto : IEntityDto<Guid>
    {
        [ForeignKey("PhaseMilestone")]
        public Guid PhaseMilestoneId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public SprintStatus Status { get; set; }
        public required string Comments { get; set; }
        public required string Goals { get; set; }
        public int SprintNumber { get; set; }
        public virtual PhaseMilestone? PhaseMilestone { get; set; }
        public Guid Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public  object?[] GetKeys()
        {
            throw new NotImplementedException();
        }
    }
}
