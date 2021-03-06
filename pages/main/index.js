import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { BackgroundVideo } from '../../components';
import { Header, Footer, Quote, VideoCircles } from '../../components';

export default HomePage => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Ping</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <BackgroundVideo />
        <Quote />
        <VideoCircles />
      </main>
      <Footer />
    </div>
  )
}
