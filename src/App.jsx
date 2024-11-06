import './App.css'
import Filter from './components/Filter'
import ItemListPage from './components/ItemListPage'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins, Arial, sans-serif',
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Filter/>
      {/* <ItemListPage/> */}
    </ThemeProvider>
  )
}

export default App
