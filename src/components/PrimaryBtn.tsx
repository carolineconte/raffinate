import Link from "next/link";

type Props = {}

const PrimaryBtn = (props: Props) => {
  return (
    <Link href={''} aria-label="Agendar Consulta" id='Agendar Consulta'
      className="shadow-btn	text-white-mist bg-blue-black p-4 rounded-2xl font-medium uppercase text-xs 
       w-fit m-auto lg:text-xl">
      Agende agora sua consulta
    </Link>
  )
}

export default PrimaryBtn;