﻿using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateAuditHistoryDto
    {   
        public required DateTime Audit { get; set; }
        public required string ReviewedBy { get; set; }
        public required string Status { get; set; }
        public required string ReviewedSection { get; set; }
        public required string Comment { get; set; }
        public required string ActionItem { get; set; }
    }
}
