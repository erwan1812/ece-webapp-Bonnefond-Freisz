import Link from 'next/link'
import Head from 'next/head'


function Home() {
  return (
    <>
    <Head>
      <title>My app</title>
      <h1 >Mon app</h1>
    </Head>
   <body>
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   <div>     
        <p>Bienvenue sur notre app.
        </p> 
        </div>
   </body>
    
    </>
  )
}

export default Home