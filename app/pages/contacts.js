import Head from 'next/head'
import Link from 'next/link'


function Contacts() {
    return (
    <>
    <Head>
        <title>Contacts</title>

    </Head>
    <body>
        <div>
        <h1>Contacts :</h1>
        </div>
        <p><a href='erwan.bonnefond@edu.ece.fr'>Contactez Erwan</a></p>
        <p><a href='henri.freisz@edu.ece.fr'>Contactez Henri</a></p>     
       
        <ul>
            <li>
                <Link href="/">
                     <a>Home</a>
                </Link>
            </li>
        </ul>
    </body>
    </>)
  }
  
  export default Contacts