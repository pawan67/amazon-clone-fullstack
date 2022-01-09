import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";

// pages/_app.js
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
