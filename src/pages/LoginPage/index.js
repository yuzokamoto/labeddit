import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AuthContext from '../../contexts/SessionContext';
import { Post } from '../../services/api';

import 'antd/dist/antd.css';

function LoginPage() {
  const history = useHistory();
  const { setSession } = useContext(AuthContext);

  const { Content } = Layout;
  const { Title } = Typography;

  const login = async (values) => {
    const body = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await Post('/login', body);
      // Dados recebidos são moldados
      const newSession = {
        authenticated: true,
        token: response.data.token,
        user: response.data.user,
      };

      // Dados recebidos são salvos no localstorage
      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem('user', JSON.stringify(response.data.user));
      // Sessão utilizada no contexto é atualizada com os dados recebidos
      setSession(newSession);
      history.push('/feed');
    } catch (error) {
      console.error('Login Request Denied', error.response);

      alert(error.response.data.message);
    }
  };

  return (
    <Content
      style={{
        height: '55.422vh',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title style={{ textAlign: 'center' }}>Login</Title>
      <Form
        name='normal_login'
        initialValues={{
          remember: true,
        }}
        onFinish={login}
        style={{
          maxWidth: '300px',
          margin: '0 auto',
          marginTop: '32px',
        }}
      >
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ float: 'right' }} />}
            placeholder='Email'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <span style={{ float: 'right' }}>Forgot password</span>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
            Log in
          </Button>
          Or{' '}
          <span
            onClick={() => history.push('/register')}
            style={{ cursor: 'pointer' }}
          >
            register now!
          </span>
        </Form.Item>
      </Form>
    </Content>
  );
}

export default LoginPage;
