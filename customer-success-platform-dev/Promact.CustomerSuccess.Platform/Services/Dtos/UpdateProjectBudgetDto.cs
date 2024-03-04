using Promact.CustomerSuccess.Platform.Entities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateProjectBudgetDto
    {
        [Required]
        
        public ProjectType Type { get; set; }
        public required int? DurationInMonths { get; set; }
        public required int? BudgetedHours { get; set; }
        public required double BudgetedCost { get; set; }
        public required string Currency { get; set; }
        [ForeignKey(nameof(Project))]
        public Guid ProjectId { get; set; }
        public virtual Project? Project { get; set; }
    }
}
