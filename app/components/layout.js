
import Footer from './footer'
import Header from './header'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}