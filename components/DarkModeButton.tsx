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
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/sun.png" alt="logo" height="35" width="35" />
            </button>
          ) : (
            <button
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.png" alt="logo" height="35" width="35" />
            </button>
          )}</>
    );
    };


export default DarkModeButton