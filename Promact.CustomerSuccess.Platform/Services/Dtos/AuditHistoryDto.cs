﻿using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class AuditHistoryDto :IEntityDto<Guid>
    {

        public Guid Id { get; set; }
        public Guid ProjectId { get; set; }
        public required DateTime Audit { get; set; }
        public required string ReviewedBy { get; set; }
        public required string Status { get; set; }
        public required string ReviewedSection { get; set; }
        public required string Comment { get; set; }
        public required string ActionItem { get; set; }
    }
}
