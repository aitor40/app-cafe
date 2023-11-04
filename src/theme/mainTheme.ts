import { createTheme } from '@mui/material/styles';

export interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }

  
export const theme = createTheme({
  palette: {
    primary: {
      light: '#C5CAE9',
      main: '#3F51B5',
      dark: '#303F9F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#F5F5F5',
      main: '#9E9E9E',
      dark: '#616161',
      contrastText: '#212121',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});