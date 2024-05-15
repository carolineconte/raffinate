interface IProps {
  title: string;
  body: string;
  bg?: string;
  txtColor?: string ;
}

const Card = ({ title, body, bg = 'transparent', txtColor='text-white' }: IProps) => {
  return (
    <div className={`p-2 text-center flex flex-col justify-center items-center ${bg} border-2 border-subtle-gray rounded-3xl
    md:h-full`}>
      <h2 className={`font-bold ${txtColor} text-[1.5em] mt-3
      lg:text-[1.5em]`}>{title}</h2>
      <p className={`px-2 font-light leading-5 py-3
      lg:text-[1em] lg:leading-7 ${txtColor}`}> {body}</p>
    </div>
  )
}
export default Card;