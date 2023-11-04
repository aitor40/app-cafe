import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './context';
import { AppRouter } from './routes/AppRouter';
import { theme } from './theme/mainTheme';

const App = () => {

  return (
    <AuthProvider>
      <ThemeProvider theme={ theme }>
        <AppRouter />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App;