import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#5c67a3',
      main: '#0E1428',
      dark: '#2e355b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff79b0',
      main: '#47D78C',
      dark: '#c60055',
      contrastText: '#000',
    },
    openTitle: '#2E4052',
    protectedTitle: '#0E1428',
    type: 'light'
  }
})

export default theme