import Head from 'next/head'
function About() {
    return (
        <>
            <Head>
                <title>About</title>

            </Head>
            <body>
                <div class="">
                    <h1 className='wt-title'>About us :</h1>
                    <div class=" py-8 px-8 max-w-sm mt-6 ml-6 bg-white rounded-xl shadow-lg space-y-1 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            Nous sommes Erwan et Henri étudiants en 4ème année d'ingénieur à l'école ECE paris.
                            Etant dans la majeure SI, nous avons un projet web à faire pour la matière web-tech.
                            Voici notre projet "app".
                            </div>
                    </div>
                </div>
            </body>
        </>)
}

export default About