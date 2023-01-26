
//...props 받기 https://stackoverflow.com/questions/40032592/typescript-workaround-for-rest-props-in-react
export const HamburgerIcon=({...rest})=>{

  return(
  <div {...rest}>
      <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={'origin-center transition'}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={'origin-center transition scale-90 opacity-0'}
        
      />
    </svg>
  </div>
    )
}