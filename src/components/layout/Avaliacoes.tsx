import CardReview from "../CardReview"
import SectionTitle from "../SectionTitle"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Avaliacoes = () => {

  const cards = [
    {
      name: 'Carolina Viana',
      text: 'Gostaria de agradeçer a Dra Rhayane pelo atendimento e paciência. A gente se sente acolhida.E a Fernanda tambem por nos tranquilizar sempre...'
    },
    {
      name: 'Augusto',
      text: 'Dra muito cuidadosa para o paciente não sentir dor,'
    },
    {
      name: 'Carolina Viana',
      text: 'Dr Rodrigo super competente e ágil na hora de colocar o aparelho. Amei todo o atendimento da clinica.'
    }, {
      name: 'Carolina Viana',
      text: 'Clínica com profissionais capacitados e muito queridos! Trabalho de excelência, super satisfeita com meu aparelho e protocolo que estamos fazendo.'
    },
  ]

  return (
    <section id="depoimentos" className="pt-10 pb-10 -mt-12 bg-white-mist/70 
    w-full scroll-mt-28">
      <SectionTitle title='O que dizem nossos clientes' txtColor='dark-olive' />
      <Carousel className="mx-10 py-5 md:max-w-[1200px] md:mx-auto">
        <CarouselContent  >
          {cards.map((item, i) =>
            <CarouselItem key={i} className="flex md:basis-1/2">
              <CardReview name={item.name} text={item.text} />
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </section>
  )
}

export default Avaliacoes