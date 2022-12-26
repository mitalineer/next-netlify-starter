import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Pari Home Decore!"" />
        <p className="description">
          Decore Your home with with the best premium furniture. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
