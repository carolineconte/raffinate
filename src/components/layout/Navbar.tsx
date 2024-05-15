'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
//COMPONENTES
import Menu from '../icons/Menu'

type Props = {}

const Navbar = (props: Props) => {

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
      href: 'diferenciais',
      label: 'Diferenciais'
    },
    {
      text: 'Depoimentos',
      href: 'depoimentos',
      label: 'Depoimentos de clientes'
    },
    {
      text: 'Contato',
      href: 'contato',
      label: 'Entre em contato'
    },
  ]

  return (
    <header
      className='bg-white-mist/55 w-full sm:flex items-center'>
      <div className='flex justify-between py-3 px-6'>
        <Image src='/LogoMenu.png' quality={95} height={50} width={50}
          alt='Logo da clinica raffinate'
          className='sm:hidden'
        />
        <button className='sm:hidden' onClick={() => setIsNavOpen(!isNavOpen)}><Menu /></button>
      </div>
      <nav className={`${isNavOpen ? 'fixed right-0 left-0 bg-white-mist' : 'hidden'}  sm:block sm:grow transition-all`}>
        <ul className='w-full p-0 border-t border-dark-charcoal sm:flex sm:border-transparent'>
          {links.map(item =>
            <li key={item.href}
              className='w-full text-center border-b border-dark-charcoal p-2 font-bold text-dark-charcoal 
              sm:border-transparent lg:font-semibold'>
              <Link href={item.href} aria-label={item.label} 
              className='border-b-2 px-2 border-transparent transition-all 
              sm:hover:border-dark-charcoal lg:text-xl'>
                {item.text}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar