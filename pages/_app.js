import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#FF813A',
    // },
    // secondary: {
    //   main: '#1DBF73',
    // },
    info: {
      main: 'rgba(210, 255, 32, 1)',
    },
    success: {
      main: '#00CDFA'
    },
    // Warning: {
    //   main: '#ffffff'
    // },
    error: {
      main: 'rgba(255, 0, 107, 1)',
    },
  },

})

function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp
