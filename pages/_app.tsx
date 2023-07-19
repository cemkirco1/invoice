import "../style/tailwind.css";
import React from "react";
import "../tailwind.config";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
