
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import LoggedIn from './LoggedIn'
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Nextjs-Dev Blog</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Navbar />
      <Header />
      <LoggedIn />
      <main>{children}</main>
      <Footer />
    </>
  )
}