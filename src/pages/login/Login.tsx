import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { authService, login } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    setLoading(true);

    await login(values)
      .then((response) => {
        const dataUser = response.data;
        const isConfirmedEmail = !dataUser.isConfirmedEmail;
        authService.login(dataUser);

        navigate(isConfirmedEmail ? '/email-verification' : '/home');
      })
      .catch((error) => {
        console.error('Error during login:', error);
        message.error('Login failed');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form
      name="basic"
      onFinish={handleLogin}
      initialValues={{ remember: true }}
      layout="vertical"
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
