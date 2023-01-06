import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import 'styles/globals.css'
import 'styles/layout.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <SessionProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>)
}
