interface Props {
  color: string;
  width: string;
  height: string;
}


const Whatsapp = ({ color, height, width }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.128 7.82144C35.7138 3.39673 29.8352 0.963135 23.5879 0.963135C10.6931 0.963135 0.200166 11.456 0.200166 24.3509C0.200166 28.4701 1.27474 32.4945 3.31854 36.0448L0 48.1601L12.3997 44.9048C15.8131 46.7695 19.6584 47.7492 23.5774 47.7492H23.5879C36.4723 47.7492 47.197 37.2563 47.197 24.3615C47.197 18.1142 44.5421 12.2462 40.128 7.82144ZM23.5879 43.8091C20.0903 43.8091 16.6664 42.8715 13.685 41.1016L12.9792 40.6802L5.62571 42.6081L7.58523 35.4338L7.12169 34.6963C5.1727 31.599 4.15081 28.0276 4.15081 24.3509C4.15081 13.6368 12.8738 4.91377 23.5985 4.91377C28.7923 4.91377 33.67 6.9365 37.3362 10.6132C41.0024 14.29 43.2569 19.1677 43.2463 24.3615C43.2463 35.0861 34.3021 43.8091 23.5879 43.8091ZM34.2494 29.2497C33.67 28.9547 30.7939 27.543 30.2566 27.3534C29.7193 27.1532 29.3295 27.0584 28.9398 27.6484C28.55 28.2383 27.4332 29.5447 27.0856 29.945C26.7485 30.3348 26.4008 30.3875 25.8214 30.0925C22.387 28.3753 20.1325 27.0268 17.8674 23.1394C17.2669 22.107 18.4679 22.1807 19.5846 19.9473C19.7743 19.5575 19.6795 19.2204 19.532 18.9254C19.3845 18.6304 18.2151 15.7543 17.7305 14.5849C17.2564 13.4472 16.7718 13.6052 16.4136 13.5841C16.0765 13.563 15.6867 13.563 15.2969 13.563C14.9071 13.563 14.275 13.7105 13.7377 14.29C13.2004 14.8799 11.6939 16.2916 11.6939 19.1677C11.6939 22.0437 13.7904 24.825 14.0748 25.2148C14.3698 25.6046 18.194 31.5042 24.062 34.0432C27.7704 35.6445 29.2242 35.7814 31.0784 35.5075C32.2056 35.339 34.5339 34.0958 35.0185 32.7263C35.5031 31.3567 35.5031 30.1873 35.3556 29.945C35.2186 29.6817 34.8288 29.5342 34.2494 29.2497Z" 
      fill={color}/>
    </svg>
  )
}

export default Whatsapp