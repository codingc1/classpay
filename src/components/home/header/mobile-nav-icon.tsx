

//buttun 보통시에는 햄버거 open이면 x 모양
export function MobileHambergerIcon({ open }:{open:boolean}) {
    const cssSum =(ok:boolean)=>{
      let basic = 'origin-center transition'
        if(ok){
            return basic + ' ' +'scale-90 opacity-0'
        }
        return basic
    }
    return (
      <svg
        aria-hidden="true"
        className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <path
          d="M0 1H14M0 7H14M0 13H14"
          className={cssSum(open)}
        />
        <path
          d="M2 2L12 12M12 2L2 12"
          className={cssSum(!open)}
        />
      </svg>
    )
  }