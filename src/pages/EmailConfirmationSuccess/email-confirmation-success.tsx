import { useEffect } from 'react';
import { Result, Button } from 'antd';
import { authService, confirmEmail } from '../../services/auth.service';
import { useLocation, useNavigate } from 'react-router-dom';

const EmailConfirmationSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = location.pathname.split('/')[2];
    confirmEmail(token).then((item: any) => {
      authService.login(item.data);
    });
  }, []);

  const handleAccessSystemClick = () => {
    navigate('/home');
  };

  return (
    <Result
      status="success"
      title="E-mail confirmado com sucesso!"
      subTitle="Agora você pode acessar o sistema."
      extra={[
        <Button
          type="primary"
          key="accessSystem"
          onClick={handleAccessSystemClick}
        >
          Acessar o sistema
        </Button>,
      ]}
    />
  );
};

export default EmailConfirmationSuccess;
