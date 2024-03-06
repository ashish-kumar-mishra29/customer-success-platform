using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdatePhaseMilestoneDto 
    {
        [Required]
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
    }
}
