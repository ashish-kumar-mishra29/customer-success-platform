using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class VersionHistoryDto :IEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public  int Version { get; set; }
        public required string Type { get; set; }
        public required string Change { get; set; }
        public required string ChangeReason { get; set; }
        public required string CreatedBy { get; set; }
        public required DateTime RevisionDate { get; set; }
        public required DateTime ApprovalDate { get; set; }
        public required string ApprovedBy { get; set; }
    }
}
