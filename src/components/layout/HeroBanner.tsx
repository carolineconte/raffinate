import PrimaryBtn from '../PrimaryBtn'
import Whatsapp from '../icons/Whatsapp'
import Instagram from '../icons/Instagram'
import MapsArrow from '../icons/MapsArrow'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const HeroBanner = (props: Props) => {
  return (
    <div className='bg-hero-pattern p-2 bg-cover bg-right-top md:bg-center'>

      <div className='overflow-hidden sm:flex items-center justify-between max-w-[1200px] md:py-20 mx-auto'>
        <div className=' text-white	flex flex-col grow'>
          <div className='text-center p-10 pb-5'>
            <p className='text-2xl -mb-[10px] sm:text-3xl'>Nosso foco é te fazer</p>
            <p className='text-7xl font-[rossanova] sm:text-8xl md:text-9xl'>SORRIR!</p>
            <p className='text-sm text-dark-charcoal leading-3 tracking-widest	
            sm:text-base sm:mx-auto sm:w-[300px] sm:-mt-3 md:text-lg md:w-[450px] md:leading-[20px]'>Equipe multiespecializada com a melhor infraestrutura da região!</p>
          </div>
          <PrimaryBtn />
        </div>
        <Image src={'/hero.jpg'} width={200} height={200} alt=''
          className='hidden rounded-2xl sm:block w-[350px] md:w-[450px]'
        />
      </div>
      <div className='flex gap-[10px] m-7 hero-icons'>
        <Link href='' aria-label='' className='hover:scale-125'>
          <Whatsapp height={'25'} width={'23'} color='#DED9D5' />
        </Link>
        <Link href='' aria-label='' className='hover:scale-125'>
          <Instagram height={'25'} width={'19'} color='#DED9D5' />
        </Link>
        <Link href='' aria-label='' className='hover:scale-125'>
        <MapsArrow height={'25'} width={'20'} color='#DED9D5' />
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner