import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'

const DarkModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme
    
    return (
       <>
        {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/vercel.svg" alt="logo" height="50" width="50" />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image src="/vercel.svg" alt="logo" height="50" width="50" />
            </button>
          )}</>
    );
    };


export default DarkModeButton