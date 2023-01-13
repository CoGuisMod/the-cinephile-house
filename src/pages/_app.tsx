import { type AppType } from "next/app";

import { api } from "../utils/api";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default api.withTRPC(MyApp);
