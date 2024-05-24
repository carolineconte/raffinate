'use client'
import { FaPaperPlane } from 'react-icons/fa';
import Link from "next/link"
import { sendEmail } from '../../../actions/sendEmail';
import Instagram from "../icons/Instagram"
import Location from "../icons/Location"
import MapsArrow from "../icons/MapsArrow"
import Whatsapp from "../icons/Whatsapp"
import toast from 'react-hot-toast';
import { useState } from "react";
//Email
import { useFormStatus } from 'react-dom';


const Contato = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const { pending } = useFormStatus()

  return (
    <section id="contato" className="py-10 flex flex-wrap justify-center items-center gap-10 bg-white-mist text-dark-olive
    scroll-mt-20">
      <div className="grow flex flex-col items-center gap-5">
        <div className="lg:mb-10">
          <h1 className="text-6xl text-center font-[rossanova] uppercase">
            Raffinate
          </h1>
          <h2 className="text-center -mt-2 text-2xl font-thin">
            ODONTOLOGIA ESTETICA
          </h2>
          <div className="flex justify-center gap-3 mt-3">
            <Link href='http://wa.me/556740429082' target="_blank" aria-label="Enviar mensagem whatsapp"
              className='hover:scale-125 transition-all'
            >
              <Whatsapp width="30" height="30" color="#4F4F3E" />
            </Link>
            <Link href='https://www.instagram.com/raffinateodontologia/'
              target="_blank" aria-label="Instagram"
              className='hover:scale-125 transition-all'
            >
              <Instagram width="30" height="30" color="#4F4F3E" />
            </Link>
            <Link
              href='https://www.google.com/maps/dir//Av.+Manoel+da+Costa+Lima,+1783+-+Vila+Ipiranga,+Campo+Grande+-+MS,+79081-040,+Brasil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x9486e5dd6ce2d219:0x36340a6df06048c2?sa=X&ved=1t:707&ictx=111'
              aria-label="Localizaçao" target="_blank"
              className='hover:scale-125 transition-all'
            >
              <MapsArrow width="30" height="30" color="#4F4F3E" />
            </Link>
          </div>
        </div>

        <div className="px-8">
          <h2 className="font-[rossanova] text-center text-4xl">
            Onde estamos:
          </h2>
          <div className="flex items-center">
            <Location />
            <address className="font-semibold not-italic text-xl ">
              Av Manoel da Costa Lima, 1783 <br />
              Vila Ipiranga<br />
              Campo Grande - MS<br />
              CEP 79081-040
            </address>
          </div>
        </div>
      </div>

      <div className="lg:w-[50%] lg:flex lg:flex-col items-center">
        <h2 className="text-5xl pl-12 font-[rossanova]">Contato</h2>
        <div className="h-[5px] w-[50%] bg-dark-olive rounded"></div>
        <form className="mt-5 w-[90%] sm:w-[70%] mx-auto"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData)
            if (error) {
              toast.error(error)
              return;
            }
            toast.success('Email enviado')
            setEmail('')
            setName('')
            setMessage('')
          }}
        >

          <label htmlFor="nome">Nome:</label>
          <input id="nome" name='senderName' type="text" required
            value={name} onChange={(e) => setName(e.target.value)}
            className="p-2 bg-earth-brown/20 rounded w-full" />

          <label htmlFor="email">Email:</label>
          <input id="email" name='senderEmail' type="email" required
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="p-2 bg-earth-brown/20 rounded w-full" />

          <label htmlFor="Mensagem">Mensagem:</label>
          <textarea id="Mensagem" name='message' required
            value={message} onChange={(e) => setMessage(e.target.value)}
            className="p-2 bg-earth-brown/20 rounded w-full"></textarea>

          <button type="submit" aria-label="Enviar email"
            className="border-2 group flex items-center gap-5 px-3 rounded hover:bg-dark-olive hover:text-white-mist transition-all">
            {
              pending ? (
                <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
              ) : (
                <>
                  Enviar
                  < FaPaperPlane className='transition-all group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:scale-50 ' />
                </>
              )
            }

          </button>
        </form>
      </div>
    </section>
  )
}

export default Contato