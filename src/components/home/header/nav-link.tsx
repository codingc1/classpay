

export function NavLink({ goto, isMouseOver, setIsMouseOver, children }:{goto:string,isMouseOver:boolean, setIsMouseOver:React.Dispatch<React.SetStateAction<boolean>>
  children:React.ReactNode}) {
  return (
    <button className="w-full flex justify-center items-center rounded-lg py-1 px-2 
      text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
      onClick={()=>setIsMouseOver(!isMouseOver)}>{children}
      {/* <a href={goto || ''}>
        {children}
      </a> */}
    </button>
  )
}

export function NavLinkFn({ children,fn }:{ children:React.ReactNode,fn:()=>void}) {
  return (
    <button className="rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 "
      onClick={()=>fn()}>
        {children}
    </button>
  )
}
