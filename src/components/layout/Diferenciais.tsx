import Card from "../Card"
import PrimaryBtn from "../PrimaryBtn"
import SectionTitle from "../SectionTitle"

const Diferenciais = () => {

  const cards = [
    {
      title: 'Avaliação Gratuita',
      body: 'Oferecemos a avaliação inicial gratuita, onde nossa equipe realiza uma análise detalhada da saúde bucal e discute quaisquer preocupações ou objetivos estéticos. Esta avaliação é uma oportunidade para nos conhecer sem compromisso.'
    },
    {
      title: 'Atendimento Personalizado',
      body: 'Na Raffinate, cada paciente é tratado de forma única e individualizada. Nossa equipe se dedica a entender as necessidades específicas de cada pessoa, garantindo um atendimento personalizado e focado em suas preocupações e objetivos.'
    },
    {
      title: 'Equipe Altamente Qualificada',
      body: 'Nossa equipe é composta por dentistas altamente qualificados, que estão sempre atualizados com as últimas técnicas em odontologia. Estamos comprometidos em oferecer o mais alto padrão de cuidado para garantir sua saúde Bucal.'
    }
  ]

  return (
    <section id="diferenciais" className="py-6 px-2 flex flex-col lg:px-10  scroll-mt-20">
      <SectionTitle title='Porque nos escolher?' />
      <div className="mt-3 mb-10 flex flex-col gap-3 max-w-[450px] md:max-w-full mx-auto md:grid md:grid-cols-3">
        {cards.map((item, i) =>
          <Card key={i} title={item.title} body={item.body} />
        )}
      </div>
      <PrimaryBtn />
    </section>
  )
}

export default Diferenciais