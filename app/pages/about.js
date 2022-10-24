import Head from 'next/head'
import Link from 'next/link'

function About() {
    return (
    <>
    <Head>
        <title>About</title>

    </Head>
    <body>
        <div>
        <h1 className='wt-title'>About us :</h1>
        <div>Nous sommes Erwan et Henri étudiants en 4ème année d'ingénieur à l'école ECE paris.
            Etant dans la majeure SI, nous avons un projet web à faire pour la matière web-tech.
            Voici notre projet "app".
        </div> 
        </div>
    </body>
    </>)
  }
  
  export default About