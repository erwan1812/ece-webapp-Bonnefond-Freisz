import Head from 'next/head'

function Contacts() {
    return (
        <>
            <Head>
                <title>Contacts</title>

            </Head>
            <div class="h-20 w-1OO bg-lime-600 grid-cols-3 gap-4 content-center">
                <div class="text-center mx-4 space-y-2 py-4">
                    <div class="text-black-600 text-5xl font-bold ">
                        Contacts
                    </div>
                </div>
            </div>
            <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="app/img/erwan.bonnefond.JPG" />
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                        <p class="text-lg text-black font-semibold">
                            Erwan Bonnefond
                        </p>
                    </div>
                    <button class="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Message</button>
                </div>
            </div>
            <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="app/img/erwan.bonnefond.JPG" />
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                        <p class="text-lg text-black font-semibold">
                            Henri Freisz
                        </p>
                    </div>
                    <button class="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Message</button>
                </div>
            </div>
        </>)
}

export default Contacts