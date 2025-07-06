import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#1A1C2F',
            color: '#e7e9ea',
            border: '1px solid #2f3336',
            borderRadius: '8px',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#4AFF8C',
              secondary: '#1A1C2F',
            },
          },
          error: {
            iconTheme: {
              primary: '#FF4A4A',
              secondary: '#1A1C2F',
            },
          },
        }}
      />
    </>
  );
}
