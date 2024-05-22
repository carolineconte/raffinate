import Image from 'next/image'
import Link from 'next/link'
//COMPONENTES
import PrimaryBtn from '../PrimaryBtn'
import Whatsapp from '../icons/Whatsapp'
import Instagram from '../icons/Instagram'
import MapsArrow from '../icons/MapsArrow'

type Props = {}

const HeroBanner = (props: Props) => {
  return (
    <div className='bg-hero-pattern mt-16 p-2 bg-cover bg-right-top'>

      <div className='overflow-hidden sm:flex items-center justify-between max-w-[1200px] md:py-20 mx-auto'>
        <div className=' text-white	flex flex-col grow'>
          <div className='text-center p-10 pb-5'>

            <p className='text-2xl -mb-[10px] sm:text-3xl
            lg:text-5xl'>
              Nosso foco é te fazer
            </p>
            <p className='text-7xl font-[rossanova] 
            sm:text-8xl md:text-9xl lg:text-[10em]'>
              SORRIR!
            </p>
            <p className='text-sm text-dark-charcoal leading-3 tracking-widest	
            sm:text-base sm:mx-auto sm:w-[300px] sm:-mt-3 
            md:text-lg md:w-[450px] md:leading-[20px]
            lg:text-2xl '>
              Equipe multiespecializada com a melhor infraestrutura da região!</p>
          </div>
          <PrimaryBtn />
        </div>
        {/* <Image src={'/hero.jpg'} width={200} height={200} alt='Equipe de dentistas'
          className='hidden rounded-2xl sm:block w-[350px] md:w-[450px]'
        /> */}
      </div>
      <div className='flex gap-[10px] m-7 hero-icons'>
        <Link href='http://wa.me/556740429082' aria-label='Enviar mensagem Whatsapp'
          className='hover:scale-125 transition-all'
          target="_blank">
          <Whatsapp height={'25'} width={'23'} color='#DED9D5' />
        </Link>
        <Link href='https://www.instagram.com/raffinateodontologia/' target="_blank"
          aria-label='Abrir Instagram' className='hover:scale-125 transition-all'>
          <Instagram height={'25'} width={'19'} color='#DED9D5' />
        </Link>
        <Link target="_blank"
          href='https://www.google.com/maps/dir//Av.+Manoel+da+Costa+Lima,+1783+-+Vila+Ipiranga,+Campo+Grande+-+MS,+79081-040,+Brasil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x9486e5dd6ce2d219:0x36340a6df06048c2?sa=X&ved=1t:707&ictx=111' 
          aria-label='Localizaçao' className='hover:scale-125 transition-all'>
          <MapsArrow height={'25'} width={'20'} color='#DED9D5' />
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner