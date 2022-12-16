import { React, useContext, useEffect, useState } from "react";
import UserContext from '../components/UserContext';

export default function Home() {
  const { user } = useContext(UserContext)
  return (
    <>
        <div class="h-20 w-1OO bg-orange-300 grid-cols-3 gap-4 content-center">
          <div class="text-center mx-4 space-y-2 py-4">
            <div class="dark:text-violet-600 text-black-600 text-5xl font-bold ">
              ACCUEIL {user?.email}
            </div>
          </div>
        </div>
    </>
  )
}


