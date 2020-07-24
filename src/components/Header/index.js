import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Layout,
  Row,
  Col,
  Space,
  Typography,
  Menu,
  Dropdown,
  Button,
  Input,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SessionContext from '../../contexts/SessionContext';

import 'antd/dist/antd.css';

function Header() {
  const { session, setSession } = useContext(SessionContext);
  const history = useHistory();

  const { Header } = Layout;
  const { Title } = Typography;
  const { Search } = Input;

  // Para deslogar é necessário limpar os dados
  // do localstorage e da sessão (contexto)
  const logout = async () => {
    // Cópia de uma sessão limpa
    const clearedSession = {
      authenticated: false,
      token: '',
      user: {
        id: '',
        username: '',
        email: '',
      },
    };
    // Remoção dos dados do localstorage
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    // Atualização da sessão utilizada no contexto
    setSession(clearedSession);
    history.push('/');
  };

  const goToLogin = () => {
    if (!session.authenticated) {
      history.push('/');
    } else (
      history.push('/feed')
    )
  };

  const goToRegister = () => {
    if (!session.authenticated) {
      history.push('/register');
    }
  };

  const navMenu = (
    <Menu>
      <Menu.Item key='0'>Filter</Menu.Item>
      <Menu.Item key='1'>Feed</Menu.Item>
      <Menu.Item key='3'>Communities</Menu.Item>
    </Menu>
  );

  const profileMenu = (
    <Menu>
      <Menu.Item key='0'>Profile</Menu.Item>
      <Menu.Item key='1'>Settings</Menu.Item>
      <Menu.Item onClick={logout} key='3'>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Header>
      <Row gutter={16}>
        <Col span={2} className='gutter-row'>
          <Space align='center'>
            <Title
              level={4}
              style={{ color: '#FF4500', cursor: 'pointer' }}
              onClick={goToLogin}
            >
              Labeddit
            </Title>
          </Space>
        </Col>

        <Col
          span={4}
          className='gutter-row'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {session.authenticated && (
            <Dropdown overlay={navMenu} trigger={['click']}>
              <Button
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                Home <DownOutlined />
              </Button>
            </Dropdown>
          )}
        </Col>

        <Col span={8} className='gutter-row' style={{ display: 'flex' }}>
          <Search
            placeholder='Search'
            onSearch={(value) => console.log(value)}
            enterButton
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          />
        </Col>

        <Col span={5} className='gutter-row'>
          {session.authenticated && (
            <Space
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                onClick={() => history.push('/feed')}
                type='text'
                style={{ color: '#fafafa' }}
              >
                Popular
              </Button>
              <Button
                onClick={() => history.push('/feed')}
                type='text'
                style={{ color: '#fafafa' }}
              >
                All
              </Button>
            </Space>
          )}
        </Col>

        <Col
          span={5}
          className='gutter-row'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {session.authenticated ? (
            <Dropdown overlay={profileMenu} trigger={['click']}>
              <Button
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>
                  {session.authenticated ? session.user.username : 'username'}
                </span>{' '}
                <DownOutlined />
              </Button>
            </Dropdown>
          ) : (
            <>
              <Button
                type='secundary'
                onClick={goToLogin}
                style={{ width: '100%', maxWidth: '150px', marginRight: '8px' }}
              >
                Log In
              </Button>
              <Button
                type='primary'
                onClick={goToRegister}
                style={{ width: '100%', maxWidth: '150px' }}
              >
                Register
              </Button>
            </>
          )}
        </Col>
      </Row>
    </Header>
  );
}

export default Header;
