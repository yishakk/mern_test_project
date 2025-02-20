import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import PublicLayout from './components/PublicLayout';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <PublicLayout />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;