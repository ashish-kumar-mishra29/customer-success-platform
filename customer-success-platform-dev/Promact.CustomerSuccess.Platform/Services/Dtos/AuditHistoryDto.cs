using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class AuditHistoryDto :IEntityDto<Guid>
    {

        public Guid Id { get; set; }
        public required DateTime Audit { get; set; }
        public required string ReviewedBy { get; set; }
        public required string status { get; set; }
        public required string reviewedSection { get; set; }
        public required string comment { get; set; }
        public required string ActionItem { get; set; }
    }
}
