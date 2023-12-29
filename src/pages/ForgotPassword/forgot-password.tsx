import { Form, Input, Button, Card, Typography } from 'antd';
import { sendRecoverPasswordEmail } from '../../services/auth.service';

const { Title, Text } = Typography;

const ForgotPassword = () => {
  const onFinish = (values: any) => {
    sendRecoverPasswordEmail(values.email).then((x) => {
      console.log(x.data.message);
      console.log('E-mail enviado');
    });
  };

  return (
    <Card style={{ width: 400, margin: 'auto', marginTop: 50 }}>
      <Title level={3}>Esqueci minha senha</Title>
      <Text>
        Informe o e-mail cadastrado e você receberá um e-mail com um link para a
        mudança de senha.
      </Text>
      <Form name="forgotPassword" onFinish={onFinish} style={{ marginTop: 20 }}>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: 'Por favor, informe seu e-mail!',
            },
            {
              type: 'email',
              message: 'Por favor, informe um e-mail válido!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar e-mail
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ForgotPassword;
