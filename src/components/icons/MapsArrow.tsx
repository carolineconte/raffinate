interface Props {
  color: string;
  width: string;
  height: string;
}

const MapsArrow = ({ color, height, width  }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6462 25.0706V23.2726H19.8482H4.65076C2.11939 23.2726 1.39409 19.9603 3.73501 18.8913C3.73599 18.8909 3.73697 18.8904 3.73796 18.89L39.617 2.73527C40.492 2.39223 41.4674 2.64621 42.1826 3.34395C42.8962 4.04002 43.1231 4.94491 42.7977 5.73882L26.2392 40.7378C26.2387 40.7389 26.2382 40.7399 26.2377 40.741C25.6787 41.906 24.57 42.3046 23.4996 42.0793C22.4179 41.8516 21.6462 41.0559 21.6462 39.8964V25.0706Z"
        stroke={color} strokeWidth="3.59596" />
    </svg>
  )
}

export default MapsArrow