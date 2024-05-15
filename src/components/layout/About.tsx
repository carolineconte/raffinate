import React from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

const About = () => {
  return (
    <section id='sobre' className='flex justify-between bg-white-mist/70 max-h-[90vh] scroll-mt-20'>
     
      <Image src='/about.jpg' height={200} width={200} alt=''
        className='hidden md:block w-full'
      />
      <div className='px-10 text-lg grow'>
        <SectionTitle title='Sobre nós' txtColor='dark-olive'/>
        <p className='font-bold'>
          Raffinate Odontologia e Estética: O Cuidado Sofisticado para o seu
        </p>
        <p>
          Bem-vindo à Raffinate Odontologia e Estética, sua nova referência em cuidados odontológicos
          em Campo Grande! Recentemente inaugurada com uma infraestrutura de excelência, estamos
          dedicados a oferecer um serviço de qualidade excepcional em um ambiente acolhedor e moderno.
        </p><br />
        <p>
          Na Raffinate, entendemos que cada sorriso é único e merece cuidados personalizados.
          Nossa equipe de profissionais altamente qualificados está comprometida em proporcionar
          tratamentos odontológicos de última geração.
        </p><br />
        <p>
          Oferecemos uma ampla gama de serviços, incluindo consultas de prevenço, limpeza, tratamento de canal, implantes ,
          próteses personalizadas, clareamento , e muito mais. Seja qual for a sua
          necessidade, estamos aqui para ajudá-lo a alcançar e manter um sorriso saudável e radiante.
        </p><br />
        <p>
          Estamos ansiosos para recebê-lo em nossa clínica e fazer parte da sua jornada rumo a um sorriso
          deslumbrante.
        </p><br />
        <p className='text-center mb-5 font-black text-2xl leading-6 font-[rossanova]'>Sorria com confiança. <br />
          Sorria com a Raffinate.</p>
      </div>

    </section>
  )
}

export default About