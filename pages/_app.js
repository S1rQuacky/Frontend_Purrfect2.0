import '../styles/globals.css'
import {SessionProvider} from "next-auth/react"
import '../styles/navbar.scss'
import '../styles/cards.scss'
import HostAcct from './hosts/hostacct';
// import 'bootstrap/dist/css/bootstrap.min.css';



function MyApp({ Component, pageProps }) {
  
  return (
  <SessionProvider>
   
    <Component {...pageProps} />
    
  </SessionProvider>
  );
}

export default MyApp
