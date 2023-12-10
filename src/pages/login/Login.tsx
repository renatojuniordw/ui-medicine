import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { login } from '../../services/auth.service';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: any) => {
    setLoading(true);

    try {
      const response = await login(values);
      const dataUser = response.data;

      localStorage.setItem('dataUser', JSON.stringify(dataUser));
      localStorage.setItem('token', dataUser.token);

      message.success('Login successful');
    } catch (error) {
      console.error('Error during login:', error);
      message.error('Login failed');
    } finally {
      setLoading(false);
    }
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
