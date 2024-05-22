interface EmailTemplateProps {
  firstName: string;
  email: string;
  msg: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName, email, msg }) => (
  <div>
    <h1>Mensagem de: <span className='font-bold'>{firstName}</span></h1>
    <h2>Responder para: {email}</h2>
    <p>{msg}</p>
  </div>
);