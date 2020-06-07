import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: '#000',
    },
  },
  status: {
    danger: 'orange',
  },
  paper: {
    // maxWidth: 400,
    padding: '30px',
    // margin: 10,
  },
});

export default theme;
