import { Box, createTheme, ThemeProvider } from '@mui/material';
import { BottomHeader, Footer, Index5g, Main, MainBar, SideButtons, UpperHeader } from './components';
import RalewayWoff2 from './theme/Raleway-VariableFont_wght.ttf';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize: 12,
    fontWeightRegular: 300,
    lineHeight: '24px',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
      `,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideButtons />
      <Box as="header">
        <UpperHeader show={true} />
        <BottomHeader />
        <Index5g />
      </Box>
      <Box as="main">
        <MainBar />
        <Main />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
