import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

// eslint-disable-next-line
import "swiper/css/bundle";
import "../styles/SwiperSliderStyles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
