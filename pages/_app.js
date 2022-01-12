import HeaderComponent from "../components/headerComponent/headerComponent";
import FooterComponent from "../components/footerComponent/footerComponent";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/styles";
import "../styles/globals.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-WKCZGDQ" });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </ThemeProvider>
  );
}

export default MyApp;
