import Link from "next/link"
import Instagram from "../icons/Instagram"
import Location from "../icons/Location"
import MapsArrow from "../icons/MapsArrow"
import Whatsapp from "../icons/Whatsapp"

const Contato = () => {
  return (
    <section id="contato" className="py-10 flex flex-wrap justify-center items-center gap-10 bg-white-mist text-dark-olive
    scroll-mt-20">
      <div className="grow flex flex-col items-center gap-5">
        <div className="lg:mb-10">
          <h1 className="text-6xl text-center font-[rossanova] uppercase">Raffinate</h1>
          <h2 className="text-center -mt-2 text-2xl font-thin">ODONTOLOGIA E ESTETICA</h2>
          <div className="flex justify-center gap-3 mt-3">
            <Link href='' aria-label="Enviar mensagem whatsapp">
              <Whatsapp width="40" height="40" color="#4F4F3E" />
            </Link>
            <Link href='' aria-label="Instagram">
              <Instagram width="40" height="40" color="#4F4F3E" />
            </Link>
            <Link href='' aria-label="Localizaçao">
              <MapsArrow width="40" height="40" color="#4F4F3E" />
            </Link>
          </div>
        </div>

        <div className="px-8">
          <h2 className="font-[rossanova] text-4xl">Onde estamos:</h2>
          <div className="flex items-center">
            <Location />
            <address className="font-semibold not-italic text-xl ">
              R. Pedro Coutinho,  337 <br />
              Jardim dos Estados.<br />
              Campo Grande -MS<br />
              CEP 00000-280
            </address>
          </div>
        </div>
      </div>

      <div className="lg:w-[50%] lg:flex lg:flex-col items-center">
        <h2 className="text-5xl pl-12 font-[rossanova]">Contato</h2>
        <div className="h-[5px] w-[50%] bg-dark-olive rounded"></div>
        <form className="mt-5 w-[90%] sm:w-[70%] mx-auto">
          <label htmlFor="nome">Nome:</label>
          <input id="nome" name="nome" type="text" className="p-2 bg-earth-brown/20 rounded w-full" />

          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="text" className="p-2 bg-earth-brown/20 rounded w-full" />

          <label htmlFor="Mensagem">Mensagem:</label>
          <textarea id="Mensagem" name="Mensagem" className="p-2 bg-earth-brown/20 rounded w-full"></textarea>

          <button type="submit" aria-label="Enviar email"
            className="border-2 px-5 rounded hover:bg-dark-olive hover:text-white-mist transition-all">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contato