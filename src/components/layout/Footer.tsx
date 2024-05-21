import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-white text-xs text-center p-2">
      Copyright 2022 - Todos os direitos reservados -  Raffinate ondontologia estetica -
      <Link href='https://carolinecontedev.com/' aria-label="Site do desenvolvedor"
        className="underline px-2 cursor-pointer hover:bg-earth-brown rounded">
       feito por: Caroline Conte
      </Link>
    </footer>
  )
}

export default Footer;