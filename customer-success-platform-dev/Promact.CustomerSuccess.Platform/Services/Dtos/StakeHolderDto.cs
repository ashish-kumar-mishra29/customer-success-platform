using Promact.CustomerSuccess.Platform.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class StakeHolderDto : IEntityDto<Guid>
    {
        [ForeignKey(nameof(Project))]
        public Guid ProjectId { get; set; }
        public Guid Id { get; set; }
        public StakeHolderTitle Title { get; set; }
        public required string Name { get; set; }
        public required string Contact { get; set; }


    }
}
