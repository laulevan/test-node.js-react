import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    
  },
  overrides: {
    MuiContainer: {
      maxWidthSm: {
        padding: "0",
      },
    },
    MuiPaper: {
      elevation1: {
        "-webkit-box-shadow": "0px 0px 10px 0px #aaa",
        "-moz-box-shadow": "0px 0px 10px 0px #aaa",
        boxShadow: "0px 0px 10px 0px #aaa",
        borderRadius: 5
      }
    }
  },
});

export default theme;