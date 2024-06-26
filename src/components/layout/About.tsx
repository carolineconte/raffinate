import React from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

const About = () => {
  return (
    <section id='sobre' className='2xl:px-60 mx-auto flex justify-between  lg:max-h-[80vh] bg-white-mist/70 scroll-mt-28'>
      <div className='hidden md:block w-[100%] max-h-[100%] max-w-[100%]'>
        <Image src='/about.jpg' height={200} width={200} alt='Foto dentista atendendo uma criança'
          className='w-[100%] h-[100%] object-cover object-top' />
      </div>
      <div className='px-10 text-lg grow'>
        <SectionTitle title='Sobre nós' txtColor='dark-olive' />
        <p className='font-bold'>
          Raffinate Odontologia estética: O Cuidado Sofisticado para o seu sorriso.
        </p>
        <p>
          Bem-vindo à Raffinate Odontologia estética, sua nova referência em cuidados odontológicos
          em Campo Grande! Recentemente inaugurada com uma infraestrutura de excelência, estamos
          dedicados a oferecer um serviço de qualidade excepcional em um ambiente acolhedor e moderno.
        </p><br />
        <p>
          Na Raffinate, entendemos que cada sorriso é único e merece cuidados personalizados.
          Nossa equipe de dentistas altamente qualificados está comprometida em proporcionar
          tratamentos odontológicos de última geração.
        </p><br />
        <p>
          Oferecemos uma ampla gama de serviços, incluindo consultas de prevenção, limpeza, tratamento de canal, implantes ,
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