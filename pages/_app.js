import "@/styles/globals.css";
import "@/styles/editor.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {

  return <SessionProvider>
    <Toaster />
    <Component {...pageProps} />
  </SessionProvider>
}
