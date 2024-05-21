import Link from "next/link";

type Props = {}

const PrimaryBtn = (props: Props) => {
  return (
    <Link href='http://wa.me/556740429082' target="_blank" aria-label="Agendar Consulta" id='Agendar Consulta'
      className="shadow-btn	text-white-mist bg-blue-black p-4 rounded-2xl font-medium uppercase text-xs 
       w-fit m-auto lg:text-xl transition-all hover:scale-105 hover:bg-blue-black/80">
      Agende agora sua consulta
    </Link>
  )
}

export default PrimaryBtn;