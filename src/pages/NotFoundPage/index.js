import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Result, Button } from 'antd';

import 'antd/dist/antd.css';

function NotFoundPage() {
  const history = useHistory();
  const [countDown, setCountDown] = useState(5);

  const { Content } = Layout;

  const goToRoot = () => {
    history.replace('/');
  };

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => setCountDown(countDown - 1), 1000);
    }
    if (countDown === 0) {
      history.replace('/');
    }
  }, [countDown, history]);

  return (
    <Content>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={goToRoot}>
            Redirecting in {countDown}
          </Button>
        }
      />
    </Content>
  );
}

export default NotFoundPage;
