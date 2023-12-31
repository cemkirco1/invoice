import "../style/tailwind.css";
import React from "react";
import "../tailwind.config";
import "../src/i18n/index";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
