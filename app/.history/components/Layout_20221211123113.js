
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
      <div className="min-h-screen mx-auto max-w-2xl flex flex-col">
        <Header />
        <LoggedIn />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}