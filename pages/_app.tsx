import '../styles/globals.css'
import type { AppProps } from 'next/app'
import useFirebaseMessaging from '../hooks/useFirebaseMessaging';

function MyApp({ Component, pageProps }: AppProps) {
  useFirebaseMessaging();
  
  return <Component {...pageProps} />
}
export default MyApp
