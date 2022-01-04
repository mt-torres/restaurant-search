import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import React from 'react';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Reset/>
      <Home/>
    </ThemeProvider>
      
  );
}

export default App;
