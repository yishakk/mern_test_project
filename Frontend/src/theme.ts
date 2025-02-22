import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: '#1DB954', 
    secondary: '#191414', 
    background: '#f5f5f5',
    text: '#333',
    white: '#fff',
    gray: '#888',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  radii: [0, 4, 8, 16],
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
};

export default theme;