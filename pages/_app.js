
import {SessionProvider} from "next-auth/react"
import '../styles/Global.scss'




function MyApp({ Component, pageProps }) {
  
  return (
  <SessionProvider>
   
    <Component {...pageProps} />
    
  </SessionProvider>
  );
}

export default MyApp
