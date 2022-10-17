import Link from 'next/link'
import Head from 'next/head'





function Home() {
  return (
    <>
    <Head>
      <title>My app</title>
      <h1>Mon app</h1>
    </Head>
   <body>
   <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Articles</a>
        </Link>
      </li>
    </ul>
   </body>
    
    </>
  )
}

export default Home