import Head from 'next/head'
import styles from '../styles/HomeNoAuth.module.scss'
import HeaderNoAuth from '@/src/components/homeNoAuth/headerNoAuth'

const HomeNoAuth = () => {
  return (
   <>
    <Head>
      <link rel="shortcut icon" href="/favicon.svg" type='image/x-icon'/>
      <title>OneBitFlix</title>
      <meta property='og:title' content='onebitflix' key="title"/>
    </Head>
    <main>
      <HeaderNoAuth/>
    </main>
   </>
  )
}

export default HomeNoAuth