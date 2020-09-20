import "../styles/globals.css";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import CssBaseline from "@material-ui/core/CssBaseline";
function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;