using Promact.CustomerSuccess.Platform.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class ProjectBudgetDto :IEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public required ProjectType Type { get; set; }
        public required int? DurationInMonths { get; set; }
        
        public required int? BudgetedHours { get; set; }

    }
}