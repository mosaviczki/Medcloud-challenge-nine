import '../../styles/globals.scss'
import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
        <ToastContainer autoClose={2000}/>
      </AuthProvider>
  )
}
