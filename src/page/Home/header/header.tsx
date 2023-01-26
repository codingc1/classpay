import React, { useState } from "react"; // import state
import { NavLink, NavLinkFn } from "../../../components/home/header/nav-link";
import { HeaderMobile } from "./header-mobile";
import { AddMenu } from "./add-menu/add-menu";
import { useLogout } from "../../../func/sys/auth/useLogout";


  //ui 라이브러리 https://headlessui.com/react/popover
  //가져옴 https://salient.tailwindui.com/
export function Header() { 
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [handleLogout] = useLogout()

  return (
    <div className="mx-auto max-w-screen-lg md:px-5 px-0 ">
    <div className={'w-full py-0 md:py-2 '}>
        <nav className="w-full relative z-50 flex ">
          <div className="flex justify-center items-center " style={{width:'70px'}}>
              <a href="/">
                <div>HOME</div>
                {/* <Logo className="h-10 w-auto" /> */}
              </a>
          </div>

          <div className="flex-1 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              {/* <div className="hidden md:flex md:gap-x-6"> */}
              <div className="hidden md:grid grid-cols-4 " style={{width:'400px'}}>
                <NavLink isMouseOver={isMouseOver} setIsMouseOver={setIsMouseOver} goto="/login">학급페이관리</NavLink>
                <NavLink isMouseOver={isMouseOver} setIsMouseOver={setIsMouseOver} goto={'/login'}><div>qr-scan</div></NavLink>
                <NavLink isMouseOver={isMouseOver} setIsMouseOver={setIsMouseOver} goto="/login">Pricing</NavLink>
                <NavLink isMouseOver={isMouseOver} setIsMouseOver={setIsMouseOver} goto="/login">Pricing</NavLink>
              </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden md:block ">
                <NavLinkFn  fn={handleLogout}>로그아웃</NavLinkFn>
              </div>
              {/* <NavButton href="/register" color="blue" className={""}>
                <span>
                  Get started <span className="hidden lg:inline">today</span>
                </span>
              </NavButton> */}
              {/* -mr-1 */}
              <div className="px-1 md:hidden">
                <HeaderMobile />
              </div>
            </div>
          </div>

        </nav>
    </div>
    <AddMenu isMouseOver={isMouseOver} setIsMouseOver={setIsMouseOver} />
    </div>
  );
}