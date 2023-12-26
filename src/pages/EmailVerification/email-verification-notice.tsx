import { Result, Button } from 'antd';
import { resendConfirmationEmail } from '../../services/auth.service';

const EmailVerificationNotice = () => {
  const handleResendClick = () => {
    resendConfirmationEmail();
  };

  return (
    <Result
      status="warning"
      title="Seu endereço de e-mail não foi confirmado!"
      subTitle="Por favor, verifique sua caixa de entrada, lixeira ou a pasta de spam."
      extra={[
        <Button type="primary" key="resend" onClick={handleResendClick}>
          Reenviar e-mail de confirmação
        </Button>,
      ]}
    />
  );
};

export default EmailVerificationNotice;
