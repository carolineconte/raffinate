import Card from "../Card"
import SectionTitle from "../SectionTitle"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


type Props = {}

const Especialidades = (props: Props) => {

  const especialidades = [
    {
      title: 'Clínica Geral',
      body: 'Consultas de rotina e exames para avaliar a saúde bucal geral, diagnóstico e tratamento de problemas dentários básicos.'
    },
    {
      title: 'Tratamento de Canal',
      body: 'Remoção da polpa infectada ou danificada de um dente, seguida de limpeza, modelagem e vedação dos canais radiculares, permitindo a preservação do dente.'
    },
    {
      title: 'Próteses',
      body: 'Restauração de dentes ausentes por meio de dispositivos artificiais, como coroas, pontes ou dentaduras, para melhorar a estética e função da boca.'
    },
    {
      title: 'Periodontia',
      body: 'Tratamento de doenças periodontais, como gengivite e periodontite, que afetam as estruturas de suporte dos dentes, como gengivas e osso alveolar.'
    },
    {
      title: 'Endodontia',
      body: 'Especialidade focada no tratamento da polpa dentária e dos tecidos periapicais. Envolve tratamento de canal, cirurgia endodôntica e outras terapias relacionadas.'
    },
    {
      title: 'Clareamento Dental',
      body: 'Procedimento estético para clarear os dentes, removendo manchas e descolorações, resultando em um sorriso mais branco e luminoso.'
    },
    {
      title: 'Implantes Dentários',
      body: 'Substituição de dentes ausentes por meio de implantes de titânio inseridos no osso maxilar, sobre os quais são fixadas coroas ou próteses dentárias.'
    },
    {
      title: 'Aparelhos Ortodônticos',
      body: 'Para correção de problemas de má oclusão e alinhar os dentes e a mandíbula, melhorando a estética e a função da boca. '
    },
    {
      title: 'Extrações',
      body: 'Remoção de um dente danificado, infectado ou impactado, geralmente necessária quando não é possível salvar o dente por meio de outros tratamentos.'
    },
  ]

  return (
    <section className="py-6 mx-2">
      <SectionTitle title='Especialidades da nossa clínica odontológica!' />
      <Carousel className="mx-8 md:mx-24 max-w-[400px] sm:max-w-full">
        <CarouselContent className="md:mx-auto md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3">
          {especialidades.map((item, i) =>
            <CarouselItem key={i} className="flex sm:basis-1/2 md:pl-0">
              <Card title={item.title} body={item.body} bg="bg-subtle-gray" txtColor="text-dark-olive" />
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious className="md:hidden" />
        <CarouselNext className="md:hidden" />
      </Carousel>

    </section>
  )
}

export default Especialidades