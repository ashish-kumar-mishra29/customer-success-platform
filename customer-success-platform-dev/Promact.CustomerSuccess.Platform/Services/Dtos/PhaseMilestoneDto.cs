using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class PhaseMilestoneDto : IEntityDto<Guid>
    {
        [ForeignKey("Project")]
        public Guid ProjectId { get; set; }
        [Required]
        public string Title { get; set; }
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Comments { get; set; }

        public MilestoneOrPhaseStatus Status { get; set; }

        public virtual ProjectDto Project { get; set; }

        public virtual ICollection<SprintDto> Sprints { get; set; }
        public Guid Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
}