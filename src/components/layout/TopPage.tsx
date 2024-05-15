'use client'
import Link from "next/link";
import React, { useEffect, useState } from 'react';

//COMPONENTES
import Phone from "@/components/icons/Phone";
import Image from "next/image";

type Props = {}

const TopPage = (props: Props) => {

  const [statusAbertura, setStatusAbertura] = useState('')

  useEffect(() => {
    let agora = new Date(); // Obtém a data e hora atual
    let options = { timeZone: 'America/Campo_Grande' }

    // Obtém as horas no fuso horário do MS
    let horasMS = new Date(agora.toLocaleString('en-US', options)).getHours();
    console.log(horasMS)
    let hrAbre = 8;
    let hrFecha = 18;

    if (horasMS >= hrAbre && horasMS < hrFecha) {
      setStatusAbertura('Aberto');
    } else {
      setStatusAbertura('Fechado');
    }
  }, []);

  return (
    <section className="text-white w-full flex-between-center flex-wrap gap-1 text-[.7em] p-2 
    sm:px-12 sm:py-3 sm:relative lg:text-[1.1em]">
      <address className="grow text-center sm:text-left">Av Manoel da Costa Lima, 1783.</address>
      <Image src={'/Logo.png'} width={150} height={150} quality={95}
        alt="Logo" className="hidden sm:block lg:w-[200px]"
      />
      <div className="flex-between-center gap-6 grow sm:justify-end group">
        {statusAbertura && <p className={`${statusAbertura === 'Aberto' ? 'text-green-700 animate-pulse' : 'text-red-700'} font-bold `}>
          {`${statusAbertura}`}
        </p>}
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