import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

// pages and components
import LoginPage from './pages/LoginPage';
import FeedPage from './pages/FeedPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import CreatePost from './components/CreatePost/index';
import SessionContext from './contexts/SessionContext';

const Routes = () => {
  const { session } = useContext(SessionContext);

  return (
    <Switch>
      <Route exact path='/'>
        {/* Checa se o usuário já está logado */}
        {/* Se estiver, a página de Login não é retornada */}
        {session.authenticated ? <FeedPage /> : <LoginPage />}
      </Route>

      <Route exact path='/register'>
        <RegisterPage />
      </Route>

      <Route exact path='/feed'>
        <FeedPage />
      </Route>

      <Route exact path='/post/:id'>
        <PostPage />
      </Route>

      <Route exact path='/createpost'>
        <CreatePost />
      </Route>

      <Route path='*'>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;
