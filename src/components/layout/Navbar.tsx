'use client'
import Image from 'next/image'
import React, { useState } from 'react'
//COMPONENTES
import Menu from '../icons/Menu'


const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)
  const links = [
    {
      text: 'Sobre nós',
      href: '#sobre',
      label: 'Sobre nós'
    },
    {
      text: 'Tratamentos',
      href: '#tratamentos',
      label: 'Tratamentos oferecidos'
    },
    {
      text: 'Diferenciais',
      href: '#diferenciais',
      label: 'Diferenciais'
    },
    {
      text: 'Depoimentos',
      href: '#depoimentos',
      label: 'Depoimentos de clientes'
    },
    {
      text: 'Contato',
      href: '#contato',
      label: 'Entre em contato'
    },
  ]

  return (
    <header className='z-10 bg-[#AEAEA6] w-full sm:flex items-center sticky top-0'>

      <div className='sm:hidden flex justify-between py-3 px-6'>
        <Image src='/LogoMenu.png' quality={95} height={50} width={50}
          alt='Logo da clinica raffinate'
        />
        <button aria-label='abrir menu' onClick={() => setIsNavOpen(!isNavOpen)}><Menu /></button>
      </div>

      <nav className={`${isNavOpen ? 'stick right-0 left-0' : 'hidden'}  sm:block sm:grow transition-all`}>
        <ul className='border-t border-dark-charcoal flex flex-col sm:flex-row justify-evenly items-center sm:border-transparent'>
          {links.map(item =>
            <li key={item.href}  onClick={() => setIsNavOpen(!isNavOpen)}
              className='text-center w-full border-b border-dark-charcoal font-bold text-dark-charcoal flex
              sm:border-transparent lg:font-semibold  hover:bg-earth-brown/50 sm:hover:bg-[#AEAEA6]'>
              <a href={item.href} aria-label={item.label}
              className='border-b-2 p-2 border-transparent transition-all w-[100%] cursor-pointer grow
              sm:hover:border-dark-charcoal lg:text-xl'>
                {item.text}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar