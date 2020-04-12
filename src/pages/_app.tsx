import { AppProps } from "next/app";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@core/reducers";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />;
  </Provider>
);

export default App;
