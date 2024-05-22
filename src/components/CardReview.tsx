import QuoteEnd from "./icons/QuoteEnd";
import QuoteStart from "./icons/QuoteStart";

interface IProps {
  name: string;
  text: string;
}

const CardReview = ({ name, text }: IProps) => {
  return (
    <div className="flex p-5 flex-col justify-between rounded-xl w-full bg-blue-black text-white">
      <QuoteStart style="h-[25px] self-start" />
      <p className="grow px-10 self-center text-md flex items-center">{text}</p>
      <p className="text-center">{name}</p>
      <QuoteEnd style="h-[25px] self-end"/>
    </div>
  )
}

export default CardReview