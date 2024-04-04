using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Promact.CustomerSuccess.Platform.Services
{
    public class ProjectStackService : 
        CrudAppService<
            ProjectStack,
            ProjectStackDto,
            Guid,
            PagedAndSortedResultRequestDto,
            CreateProjectStackDto,
            UpdateProjectStackDto>,
        IProjectStackService
    {
        public ProjectStackService(Volo.Abp.Domain.Repositories.IRepository<ProjectStack, Guid> repository) 
            : base(repository)
        {
        }
    }
}
