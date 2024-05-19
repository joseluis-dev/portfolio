import React, { useEffect, useState } from "react";

type ScrollDirectionType = 'up' | 'down' | 'none'

export const NavBar = ({ children }: { children: React.ReactNode}) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirectionType>('none')
  // console.log(scrollDirection)
  
  let lastScrollY = 0
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollDirection('none')
        return
      }
      if (window.scrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      lastScrollY = window.scrollY
    }

    if (typeof window !== 'undefined'){
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`[grid-area:nav] py-2 px-8 flex items-center fixed top-0 ${scrollDirection === 'up' && 'top-0'} ${scrollDirection === 'down' && '-translate-y-[90px]'} transition-all duration-200 backdrop-blur-sm w-full h-[85px] shadow-md shadow-[var(--shadow-dark)] ${scrollDirection === 'none' && 'shadow-none'} flex justify-between`}>
      {children}
    </nav> 
  );
}