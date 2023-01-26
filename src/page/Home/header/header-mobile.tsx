import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { MobileHambergerIcon } from "../../../components/home/header/mobile-nav-icon";
import { NavLink } from "../../../components/home/header/nav-link";
import { Link } from "react-router-dom";
import { useLogout } from '../../../func/sys/auth/useLogout';



function MobileNavLink({ href, children }:{ href:string, children:React.ReactNode }) {
    return (
      <Popover.Button as={Link} to={href} className="block w-full p-2">
        
        {children}
        
      </Popover.Button>
    )
  }

  //ui 라이브러리 https://headlessui.com/react/popover
  //가져옴 https://salient.tailwindui.com/
export const HeaderMobile=()=>{
    const [handleLogout] = useLogout()

    return (
        <Popover>
          <Popover.Button
            className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {({ open }) => <MobileHambergerIcon open={open} />}
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="div"
                className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <MobileNavLink href="/login">Features</MobileNavLink>
                <MobileNavLink href="/login">Testimonials</MobileNavLink>
                <MobileNavLink href="/login">Pricing</MobileNavLink>
                <hr className="m-2 border-slate-300/40" />
                <Popover.Button className="block w-full p-2" onClick={handleLogout}>
                    로그아웃
                </Popover.Button>
                {/* <MobileNavLink href="/login">로그아웃</MobileNavLink> */}
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </Popover>
      )
}