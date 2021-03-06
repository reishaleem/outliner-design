import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import UserDashboard from './components/UserDashboard/UserDashboard';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#f2a922'
      },
      secondary: {
          main: '#f2b705'
      },
      error: {
          main: '#bf4904'
      },
      info: {
          main: '#f28705'
      }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <UserDashboard />
    </ThemeProvider>
  );
}

export default App;
