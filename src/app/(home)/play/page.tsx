"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

const PlayPage = () => {
  const { theme } = useTheme()
  const dark = theme === "dark"
  
  return (
      <main className="flex flex-1 flex-col m-5 text-center justify-center">
        <div className="flex items-center justify-center">
            <Image 
                src='/Soplang-01.png'
                alt="Soplang"
                width={24}
                height={24}
                className="inline items-center justify-center mr-3"
            />
            <span className="font-black inline font-sans items-center justify-center mr-4">Soplang</span> Playground is Coming Soon - ❤️
        </div>
    </main>
  )
}
export default PlayPage