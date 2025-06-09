// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#03045e', 
    },
    secondary: {
      main: '#0077b6', 
    },
    accent: { // <-- Add this section
      main: '#ffd60a', // Vibrant yellow
      contrastText: '#03045e',
    },
    background: {
      default: '#00b4d8', // Very light gray
      paper: '#90e0ef',
    },
    text: {
      primary: '#ffffff', // Gray-900
      secondary: '#ffffff', // Gray-500
    },
  },
  typography: {
    fontFamily: '"Barlow", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.75rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
});
export default theme;
