
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import LoggedIn from './LoggedIn'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Header />
      <LoggedIn />
      <main>{children}</main>
      <Footer />
    </>
  )
}