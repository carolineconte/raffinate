import Image from "next/image";

import Whatsapp from "../icons/Whatsapp";
import Location from "../icons/Location";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Local = () => {

  const cards = ['/int1.jpeg', '/int2.jpeg', '/int3.jpeg']

  return (
    <section className="px-10 gap-5 md:grid md:grid-cols-2 max-w-[1200px] mx-auto scroll-mt-20">

      <div className="m-5 sm:mx-0 p-5 bg-white-mist rounded-xl flex flex-col justify-evenly overflow-hidden">
        <div className="w-full text-center">
          <p className="-mb-8">Clínica odontológica em</p>
          <h1 className="mt-5 font-light sm:tracking-widest text-[2em] sm:mx-auto">
            Campo Grande
          </h1>
          <div className="h-[5px] mb-10 -ml-10 bg-ash-brown rounded w-[100%]"></div>
        </div>
        <div className="localDivs">
          <Location />
          <address className="text-xl lg:text-2xl not-italic">
            Av Manoel da Costa Lima, 1783 - Vila Ipiranga
          </address>
        </div>
        <div className="localDivs pl-3">
          <Whatsapp width="30" height="38" color="#4F4F3E" />
          <p className="text-2xl not-italic">67 4042-9082</p>
        </div>
        <div className="localDivs pl-3">

          <table className="mt-4">
            <thead>
              <tr className="">
                <th className="flex items-center gap-5 w-full"> Horários</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border-b text-left pr-10">Segunda a Sexta</td>
                <td className="border-b">08:00 - 11:30 / 13:30 - 18:00</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border-b text-left pr-10">Sábado</td>
                <td className="border-b">08:00 - 12:00</td>
              </tr>
              <tr className="bg-white">
                <td className="border-b text-left pr-10">Domingo</td>
                <td className="border-b">Fechado</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <strong className="border-b pr-3">Responsável Técnico:</strong>
          <p>Dra. Rhayane Conde
            {/* <br />CRO xxxx */}
          </p>
        </div>
      </div>

      <div className="my-5 h-[100%]">
        <Carousel>
          <CarouselContent>
            {cards.map((item, i) =>
              <CarouselItem key={i} className="w-full h-full">
                <Image src={item} width={200} height={200} alt=""
                  className="w-full object-cover rounded-xl h-[100%] max-h-[600px]" />
              </CarouselItem>
            )}

          </CarouselContent>
          <CarouselPrevious position={'right-[51%] top-[95%]'} />
          <CarouselNext position={'left-[51%] top-[95%]'} />
        </Carousel>
      </div>

    </section>
  )
}

export default Local;