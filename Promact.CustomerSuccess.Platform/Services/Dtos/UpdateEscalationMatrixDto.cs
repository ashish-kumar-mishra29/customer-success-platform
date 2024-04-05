using System.ComponentModel.DataAnnotations.Schema;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateEscalationMatrixDto
    {
        [ForeignKey("Project")]
        public Guid ProjectId { get; set; }
        public EscalationMatrixLevels Level { get; set; }
        public EscalationType EscalationType { get; set; }
    }
}
