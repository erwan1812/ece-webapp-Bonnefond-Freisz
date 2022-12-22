import Head from 'next/head'
import Image from 'next/image'
import henriImg from '../public/henri.png'
import erwanImg from '../public/erwan.JPG'

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebApp</title>
      </Head>
      <div className="h-20 w-1OO grid-cols-3 gap-4 content-center mt-5">
        <div className="text-center mx-4 space-y-2 py-4">
          <div className="dark:text-violet-600 text-black-200 text-5xl font-serif">
            <h1 className='text-6xl'>ACCUEIL</h1>
          </div>
        </div>
      </div>
      <div className="dark:text-violet-600 text-black-200 font-mono leading-loose ">
        <p className="italic text-sm text-center">Create, Publish, Discover...</p>
        <div className='text-center mt-9'>
          <p><span className='font-bold text-xl uppercase'>Welcome in your website WebApp !</span><br></br>You can find numerous articles about differents topics such as sports, politics or even health made by you !<br></br>This is a place of freedom of expression where you can share your knowledge with our community and share your opinion about differents subjects.</p>
          <div>
            <p className='font-bold uppercase underline text-xl mt-6'>About us : </p>
            <div className='flex flex-row mt-7 '>
              <div className='object-contain h-24 w-48 mr-6 ml-6 drop-shadow-2xl rounded-md'>
                <Image src={henriImg} alt="Picture of the author" />
              </div>
              <p className='text-xl dark:text-violet-600 text-black-200 font-mono leading-loose '>I am Henri Freisz, a student in his 4th year of engineering school at ECE Paris.<br></br> I chose to specialize in computer science.</p>
              <div className='object-contain h-24 w-48 mr-6 ml-6 drop-shadow-2xl rounded-md'>
                <Image src={erwanImg} alt="Picture of the author" />
              </div>
              <p className='text-xl dark:text-violet-600 text-black-200 font-mono leading-loose '>Me, It&apos;s Erwan, I&apos;m a 4th year student at the ECE.<br></br> I&apos;m passionate about sports and I like computer development.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


