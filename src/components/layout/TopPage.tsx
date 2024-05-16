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
    let agora = new Date();
    let diaSemana = agora.getDay(); // Retorna o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
    let horasMS = agora.getHours();
    let statusAbertura = '';
  
    // Verifica se é sábado ou domingo
    if (diaSemana === 0 || diaSemana === 6) {
      statusAbertura = 'Fechado';
    } else {
      // Define os horários de abertura e fechamento
      let hrAbreManha = 8;
      let hrFechaManha = 11;
      let hrAbreTarde = 13;
      let hrFechaTarde = 18;
  
      // Verifica o horário atual
      if ((horasMS >= hrAbreManha && horasMS < hrFechaManha) || (horasMS >= hrAbreTarde && horasMS < hrFechaTarde)) {
        statusAbertura = 'Aberto';
      } else {
        let horasFaltando = 0;
  
        // Se a hora atual for depois do horário de fechamento da manhã, calcula as horas restantes até o horário de abertura da tarde
        if (horasMS >= hrFechaManha && horasMS < hrAbreTarde) {
          horasFaltando = hrAbreTarde - horasMS;
        }
        // Se a hora atual for depois do horário de fechamento da tarde, calcula as horas restantes até o horário de abertura do próximo dia
        else if (horasMS >= hrFechaTarde) {
          horasFaltando = (24 - horasMS) + hrAbreManha;
        }
        // Se a hora atual for antes do horário de abertura da manhã, calcula as horas restantes até o horário de abertura
        else {
          horasFaltando = hrAbreManha - horasMS;
        }
  
        statusAbertura = `Fechado, abre em: ${horasFaltando} horas`;
      }
    }
  
    setStatusAbertura(statusAbertura);
  }, []);
  
  return (
    <section className="text-white w-full flex-between-center flex-wrap gap-1 text-[.7em] p-2 
    sm:px-12 sm:py-3 sm:relative lg:text-[1.1em]">
      <address className="grow text-center sm:text-left">Av Manoel da Costa Lima, 1783.</address>
      <Image src={'/Logo.png'} width={150} height={150} quality={95}
        alt="Logo" className="hidden sm:block lg:w-[200px]"
      />
      <div className="flex-between-center gap-6 grow sm:justify-end group">
        {statusAbertura && <p className={`${statusAbertura === 'Aberto' ? 'text-green-700' : ''} font-bold `}>
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