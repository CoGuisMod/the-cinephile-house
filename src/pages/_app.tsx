import { type AppType } from "next/app";

import { api } from "../utils/api";

import { AuthContextProvider } from "../context/AuthContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthContextProvider>
  );
};

export default api.withTRPC(MyApp);
