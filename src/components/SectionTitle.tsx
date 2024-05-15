interface IProps {
  title: string;
  txtColor?: string;
}

const SectionTitle = ({ title, txtColor = 'white' }: IProps) => {
  return (
    <>
      <h1 className={`p-2 mt-5 text-center text-${txtColor} font-light sm:tracking-widest
    text-[2em] leading-8 sm:w-2/3 sm:mx-auto md:text-[2.2em]
    lg:text-[2.5em] lg:w-2/4 lg:leading-10`}>
        {title}
      </h1>
      <div className={`h-[5px] mb-10 -ml-10 bg-ash-brown rounded
      w-[100%] sm:w-[80%] lg:w-[70%]`}></div>
    </>
  );
}

export default SectionTitle;