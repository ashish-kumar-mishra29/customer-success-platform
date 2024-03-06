namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class EscalationMatrixDto
    {
       
            public Guid Id { get; set; }
            public EscalationMatrixLevels Level { get; set; }
            public EscalationType EscalationType { get; set; }
            public Guid ProjectId { get; set; }
        

    }
}