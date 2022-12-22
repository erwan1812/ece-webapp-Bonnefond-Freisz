
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Nextjs-Dev Blog</title>
        <meta name="description" content="Our Blog App" />
      </Head>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      <Head>
        <title>Nextjs-Dev Blog</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
    </>
  )
}