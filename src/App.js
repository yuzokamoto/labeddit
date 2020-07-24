import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthContext from './contexts/SessionContext';

function App() {
  // Estado da sessão, é ela que é passada no valor do contexto
  // AuthContext
  const [session, setSession] = useState({
    authenticated: false,
    token: '',
    user: {
      id: '',
      username: '',
      email: '',
    },
  });

  useEffect(() => {
    // Busca token e user do localstorage
    // Se não existirem, token e/ou user são undefined
    const token = window.localStorage.getItem('token');
    const user = window.localStorage.getItem('user');

    // Se token E user tiverem valor diferente de undefined
    // pois undefined é igual a falso
    // Atualiza a sessão no estado
    if (token && user) {
      const newSession = {
        authenticated: true,
        token: token,
        user: JSON.parse(user),
      };

      setSession(newSession);
    }
  }, []);

  return (
    <BrowserRouter>
      {/* Passei o objeto desestruturado para simplificar */}
      {/* Pois o value só pode receber um único objeto */}
      <AuthContext.Provider value={{ session, setSession }}>
        <Header />
        <Routes />
        <Footer />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
