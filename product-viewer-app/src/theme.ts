import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333',
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    customYellow: {
      light: '#ffff72',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000',
    },
    customPurple: {
      light: '#d05ce3',
      main: '#9c27b0',
      dark: '#6a0080',
      contrastText: '#fff',
    },
    customOrange: {
      light: '#ff8a50',
      main: '#ff5722',
      dark: '#c41c00',
      contrastText: '#fff',
    },
    customPink: {
      light: '#ff6090',
      main: '#e91e63',
      dark: '#b0003a',
      contrastText: '#fff',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '2rem',
      textAlign: 'center',
    },
  },
});

export default theme;
