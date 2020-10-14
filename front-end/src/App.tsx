import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SignUp />
  </>
);

export default App;
