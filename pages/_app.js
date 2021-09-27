import '../styles/globals.css'
import { PersonProvider } from 'context'

function MyApp({ Component, pageProps }) {

  return (
    <PersonProvider>
      <Component {...pageProps} />
    </PersonProvider>
  )
}

export default MyApp
