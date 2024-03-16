using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Promact.CustomerSuccess.Platform.Services.EmailService;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services
{

    public class StakeHolderService : CrudAppService<StakeHolder, StakeHolderDto, Guid,PagedAndSortedResultRequestDto,CreateStakeHolderDto,UpdateStakeHolderDto>
    {
        private readonly IConfiguration _config;
        private readonly IEmail _emailService;
        public StakeHolderService(IRepository<StakeHolder, Guid> repository, IConfiguration config, IEmail emailService) : base(repository)
        {
            _config = config;
            _emailService = emailService;
        }

        public override async Task<StakeHolderDto> CreateAsync( CreateStakeHolderDto request )
        {
            var product = await base.CreateAsync(request);
            
            var mail = request.Contact;
            EmailDto email = new EmailDto
            {
                Contact = request.Contact,
                Subject = "Registration Successfull",
                Body = "Hello " + mail +
                "<p> Please note that audit has been completed and here is the audit summary: </p> " +
                " <p>Thanks and Regards,</p>" +
                "<p>Promact Infotech Pvt Ltd</p>"
            };
            _emailService.SendEmail(email);
            return product ;
            
        }
    }

}
