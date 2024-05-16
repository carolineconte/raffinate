'use client'
import Link from "next/link";
import React, { useEffect, useState } from 'react';

//COMPONENTES
import Phone from "@/components/icons/Phone";
import Image from "next/image";

type Props = {}

const TopPage = (props: Props) => {

  return (
    <section className="text-white w-full flex-between-center flex-wrap gap-1 text-[.7em] p-2 
    sm:px-12 sm:py-3 sm:relative lg:text-[1.1em]">
      <address className="grow text-center sm:text-left">Av Manoel da Costa Lima, 1783.</address>
      <Image src={'/Logo.png'} width={150} height={150} quality={95}
        alt="Logo" className="hidden sm:block lg:w-[200px]"
      />
      <div className="flex-between-center gap-6 grow sm:justify-end group">
 
        <div className="flex gap-2 items-center sm:items-end">
          <Phone className='hidden sm:block group-hover:animate-pulse' />
          <Link href={''} aria-label="Ligar para clinica">
            <span className="no-underline	sm:block sm:text-center">Ligar: </span>
            <span className="underline cursor-pointer">67 4042-9082</span></Link>
        </div>
      </div>
    </section >

  )
}

export default TopPage