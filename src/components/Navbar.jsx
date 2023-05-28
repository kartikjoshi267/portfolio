import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [bg, setBg] = useState('transparent');

  useEffect(() => {
    const handleOnScroll = () => {
      if (document.body.scrollTop >= '400' || document.documentElement.scrollTop >= '400'){
        setBg(`primary`);
      } else {
        setBg(`transparent`);
      }
    }
    window.addEventListener('scroll', handleOnScroll);

    return () => {
      return window.removeEventListener('scroll', handleOnScroll);
    }
  }, [])


  return (
    <nav style={{ transition: 'background ease-in-out 0.2s' }} className={`sm:${styles.paddingX} bg-${bg} w-full sm:py-3 py-3 flex items-center fixed top-0 z-20`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to={'/'} className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className={`text-white text-[18px] font-bold cursor-pointer`}>Kartik Joshi</p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => {
            return (
              <li key={link.id} className={`${active === link.title ? "text-[#ffb412]" : "text-[#d9d502]"} hover:text-[#ffb412] text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          })}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((link) => {
                return (
                  <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                    }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar