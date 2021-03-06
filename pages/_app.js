import React from "react";
import withRedux,{ createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import store from "../store/store";

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />;
  </Provider>
);

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
