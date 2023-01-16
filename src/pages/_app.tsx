import { type AppType } from "next/app";

import { api } from "../utils/api";

import { AuthContextProvider } from "../context/AuthContext";
import { DataContextProvider } from "../context/DataContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <Navbar />

        <Component {...pageProps} />

        <div className="py-2" />

        <Footer />
      </DataContextProvider>
    </AuthContextProvider>
  );
};

export default api.withTRPC(MyApp);
