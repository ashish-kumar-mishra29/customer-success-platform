using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services
{
    public class ApprovedTeamService : CrudAppService<
        ApprovedTeam, ApprovedTeamDto, Guid,
            PagedAndSortedResultRequestDto,
            CreateApprovedTeamDto,
            UpdateApprovedTeamDto>, ITransientDependency
    {
        public ApprovedTeamService(IRepository<ApprovedTeam, Guid> repository) : base(repository)
        {
        }
    }
}
