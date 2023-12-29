import { Form, Input, Button, Card, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../../services/auth.service';

const { Title } = Typography;

const ResetPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onFinish = (values: any) => {
    const token = location.pathname.split('/')[2];

    resetPassword(token, values)
      .then((item) => {
        console.log(item.data.message);
        navigate('/home');
      })
      .catch()
      .finally();
  };

  const passwordValidator = async (_: any, value: any, callback: any) => {
    const confirmPassword = form.getFieldValue('password');
    if (value && value !== confirmPassword) {
      throw new Error('As senhas não coincidem!');
    } else {
      callback();
    }
  };

  return (
    <Card style={{ width: 400, margin: 'auto', marginTop: 50 }}>
      <Title level={3}>Resetar Senha</Title>
      <Form
        form={form}
        name="resetPassword"
        onFinish={onFinish}
        style={{ marginTop: 20 }}
      >
        <Form.Item
          name="password"
          label="Nova Senha"
          rules={[
            {
              required: true,
              message: 'Por favor, informe a nova senha!',
            },
            {
              min: 6,
              message: 'A senha deve ter pelo menos 6 caracteres!',
            },
            {
              max: 32,
              message: 'A senha deve ter até 32 caracteres!',
            },
            {
              pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              message:
                'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número ou um símbolo',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="passwordConfirmation"
          label="Confirmar Nova Senha"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Por favor, confirme a nova senha!',
            },
            {
              validator: passwordValidator,
            },
            {
              min: 6,
              message: 'A senha deve ter pelo menos 6 caracteres!',
            },
            {
              max: 32,
              message: 'A senha deve ter até 32 caracteres!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Resetar senha
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ResetPassword;
