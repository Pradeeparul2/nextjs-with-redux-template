import RootLayout from '@/components/Layout/Layout';
import { Provider } from 'react-redux';
import store, {persistor} from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>);
}