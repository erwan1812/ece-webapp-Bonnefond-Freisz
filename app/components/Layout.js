
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

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