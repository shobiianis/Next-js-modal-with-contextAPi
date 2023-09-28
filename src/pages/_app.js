import ModalContextComponent from '@/context/ModalContextComponent'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ModalContextComponent><Component {...pageProps} /></ModalContextComponent>
}
