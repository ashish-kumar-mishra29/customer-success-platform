using Promact.CustomerSuccess.Platform.Services.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.EmailService
{
    public interface IEmail
    {
        void SendEmail(EmailDto request);
    }
}
