import { motion } from 'framer-motion';
import { useState } from 'react';
import {useMediaQuery} from '/utils/useMediaQuery';
import Link from 'next/link'; // Add this import statement

export default function Header() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery('(min-width: 1280px)');

  return (
    <nav className="fixed mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32 top-0 left-0 right-0 bg-[hsla(0%, 0%, 0%, 0.75)] z-50">
      <Link legacyBehavior href="/"><a>the way <br /> church</a></Link>

      {matches ? (
        <div className="flex gap-12">
          <Link legacyBehavior href="/"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">home</a></Link>
          <Link legacyBehavior href="/About"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">About</a></Link>
          <Link legacyBehavior href="/Giving"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">Giving</a></Link>
          <Link legacyBehavior href="/Sermons"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">Sermons</a></Link>
          <Link legacyBehavior href="/Contacts"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">Contact</a></Link>
        </div>
      ) : (
        <>
          <div 
            onClick={() => setToggled(prevToggle => !prevToggle)}
            className="space-y-1.5 cursor-pointer z-[100]"
            aria-label="Toggle navigation menu"
          >
            <motion.span 
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} 
              className="block h-0.5 w-8 bg-black"
            />
            <motion.span 
              animate={{ width: toggled ? 0 : 24 }} 
              className="block h-0.5 w-6 bg-black"
            />
            <motion.span 
              animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0, width: toggled ? 32 : 16 }} 
              className="block h-0.5 w-4 bg-black"
            />
          </div>

          {toggled && (
            <motion.div 
              animate={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: 50 }} 
              className="fixed flex bottom-0 left-0 w-full h-screen items-center justify-center z-[100] bg-[hsla(0%, 0%, 0%, 0.95)] backdrop-blur-md"
            >
              <div className="flex flex-col gap-12 text-lg">
                <Link legacyBehavior href="/"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">home</a></Link>
                <Link legacyBehavior href="/About"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">About</a></Link>
                <Link legacyBehavior href="/Giving"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">Giving</a></Link>
                <Link legacyBehavior href="/Sermons"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">Sermons</a></Link>
                <Link legacyBehavior href="/Contacts"><a className="uppercase text-gray-900 hover:text-gray-400 letter-spacing-2">Contact</a></Link>
              </div>
            </motion.div>
          )}
        </>
      )}
    </nav>
  );
}
