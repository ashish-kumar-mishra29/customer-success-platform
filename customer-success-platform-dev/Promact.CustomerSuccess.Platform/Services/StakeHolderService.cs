using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services
{
    public class StakeHolderService : CrudAppService<StakeHolder, StakeHolderDto, Guid,PagedAndSortedResultRequestDto,CreateStakeHolderDto,UpdateStakeHolderDto>
    {
        public StakeHolderService(IRepository<StakeHolder, Guid> repository) : base(repository)
        {
        }
    }

}
