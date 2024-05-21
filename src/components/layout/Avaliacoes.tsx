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
      name: 'nome',
      text: 'ed not only five centuries, but also the leap into electronic typesetting, remaining essentia'
    }, {
      name: 'nome',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    }, {
      name: 'Lorem Ipsum',
      text: 'The standard chunk of  used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
    }, {
      name: 'used since',
      text: '"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    },
  ]
  return (
    <section id="depoimentos" className="pt-3 pb-10 -mt-12 bg-white-mist/70 
    w-full scroll-mt-28">
      <SectionTitle title='O que dizem nossos clientes' txtColor='dark-olive' />
      <Carousel className="2xl:mx-48 mx-10 md:mx-24 sm:max-w-full max-w-[1200px]">
        <CarouselContent >
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