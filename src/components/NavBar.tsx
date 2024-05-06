import { useEffect, useState } from "react";
import { LinksList } from "./LinksList";

type ScrollDirectionType = 'up' | 'down' | 'none'

export const NavBar = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirectionType>('none')
  console.log(scrollDirection)
  
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
    <nav className={`[grid-area:nav] fixed top-0 ${scrollDirection === 'up' && 'top-0'} ${scrollDirection === 'down' && '-translate-y-[90px]'} transition-all duration-200 backdrop-blur-sm w-full h-[85px] shadow-md shadow-[var(--shadow-dark)] ${scrollDirection === 'none' && 'shadow-none'} p-4 flex justify-between`}>
      <a href="#" className="w-14 h-14 ml-4 p-1 hover:bg-[var(--sky-blue-hover)] border border-[var(--sky-blue)] rounded-md">
        <img
          src="https://res.cloudinary.com/jl-img-store/image/upload/v1661997155/Portafolio/jose_icon_adaptive_fore_enjr9l.png"
          alt="Logo letra J"
          className="object-cover w-full h-full rounded-md"
        />
      </a>
      <div className="flex pr-6 gap-8 items-center">
        <LinksList />
        <button className="border border-[var(--sky-blue)] p-2 text-[var(--sky-blue)] rounded-md hover:bg-[var(--sky-blue-hover)] font-mono">Curriculum</button>
      </div>
    </nav> 
  );
}