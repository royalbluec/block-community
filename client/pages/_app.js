import { GlobalStyle } from '../styles/GlobalStyle';
// import wrapper from '../store';
import { wrapper, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Component {...pageProps} />
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
