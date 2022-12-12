
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import LoggedIn from './LoggedIn'
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
    <Head>
        <title>Next Tailwind Theme</title>
        <meta name="description" content="Create dark mode in next and tailwind" />
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