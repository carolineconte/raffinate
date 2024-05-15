import Whatsapp from "../icons/Whatsapp";
import Location from "../icons/Location";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const Local = () => {

  const cards = ['/hero.jpg', '/hero-pattern.jpg', '/about.jpg']

  return (
    <section className="md:grid md:grid-cols-2 md:gap-5 max-w-[1200px] mx-auto">

      <div className="m-5 p-10 bg-white-mist rounded-xl flex flex-col justify-evenly overflow-hidden">
        <div className="w-full text-center">
          <p className="-mb-8">Clínica odontológica em</p>
          <h1 className="mt-5 font-light sm:tracking-widest text-[2em] sm:mx-auto">
            Campo Grande
          </h1>
          <div className="h-[5px] mb-10 -ml-10 bg-ash-brown rounded w-[100%]"></div>
        </div>
        <div className="localDivs">
          <Location />
          <address className="text-2xl not-italic">
            Av Manoel da Costa Lima, 1783 - Vila Ipiranga
          </address>
        </div>
        <div className="localDivs pl-3">
          <Whatsapp width="30" height="38" color="#4F4F3E" />
          <address className="text-2xl not-italic">67 4042-9082</address>
        </div>
        <div>
          <strong className="border-b pr-3">Responsável Técnico:</strong>
          <p>Dra. xxxxxx xxx <br />CRO xxxx</p>
        </div>
      </div>

      <div className="m-5 h-[500px]">
        <Carousel>
          <CarouselContent>
            {cards.map((item, i) =>
              <CarouselItem key={i}>
                <Image src={item} width={200} height={200} alt=""
                  className="w-full object-cover rounded-xl h-[500px]" />
              </CarouselItem>
            )}
          </CarouselContent>
        </Carousel>
      </div>

    </section>
  )
}

export default Local;