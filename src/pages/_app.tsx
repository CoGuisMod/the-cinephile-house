import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import { AuthContextProvider } from "../context/AuthContext";

import Navbar from "../components/Navbar/Navbar";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
};

export default trpc.withTRPC(MyApp);
