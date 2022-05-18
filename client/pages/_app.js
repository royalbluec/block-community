import { GlobalStyle } from '../styles/GlobalStyle';
import wrapper from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
