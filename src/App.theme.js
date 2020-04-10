import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const appTheme = createMuiTheme({
  palette: {
    primary: { main: '#fff' },
    secondary: { main: '#000' },
    warning: { main: '#f0b000' },
    background: { default: '#fff', paper: '#ECECEC',  },
    text: { primary: '#757373', secondary: '#858585' },
    common: {white: '#fff'}
  },
  typography: {
    h1: {
      fontSize: 26,
      lineHeight: '32px',
      fontWeight: 600,
    },
    h2: {
      fontSize: 20,
      lineHeight: '26px',
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      lineHeight: '24px',
      fontWeight: 500,
    },
    h4: {
      fontSize: 14,
      lineHeight: 'normal',
      fontWeight: 500,
    },
    h5: {
      fontSize: 13,
      lineHeight: 'normal',
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      lineHeight: '27px',
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 500,
    },
    caption: {
      fontSize: 12,
      lineHeight: '14px',
      fontWeight: 500,
    },
    h6: {
      fontSize: 11,
      fontWeight: 500,
    }
  }
});

export default appTheme;
