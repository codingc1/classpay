import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    CalendarIcon,
    HomeIcon,
    MagnifyingGlassCircleIcon,
    MapIcon,
    MegaphoneIcon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client';
import { authVar } from '../../stores/authstore';
import { routeVar } from '../../stores/route-info-store';
import { HamburgerIcon } from '../../page/Home/header/left-menu/hambuger-icon';

import { useLogout } from '../../func/sys/auth/useLogout';
import { CP_PAY_MEMBER_ROUTE_NAME, PAY_HOME, USER_PROFILE_ROUTE_NAME,  } from '../../routers/route-name-constants';
import { cpPayVar } from '../../stores/cp-pay-store';
import { InstitutionChild } from './institution/institution-child';
// import { useInstitutionshMutation } from './institution/useInstitutionshMutation';
import { GoTriangleDown } from "react-icons/go";
import { useInstitutionshQuery } from './institution/useInstitutionshQuery';
import { editCpInstitutionVar } from '../../stores/cp-institution';
import { LayOutSettingBtn } from './layout-left/layout-setting-btn';
import { RxHamburgerMenu } from "react-icons/rx"
  
  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }


//leftMenu, leftLayout
function LayoutLeft() {
    let navigate = useNavigate()
    const isLoggedIn = useReactiveVar(authVar).isLogin;
    const routeInfo = useReactiveVar(routeVar);
    const payid = useReactiveVar(cpPayVar).payid;

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isShow =isLoggedIn && routeInfo.header.isVisible
  //햄버거가 없어지는 현상
  // const closeSidebar = () => {
  //   editRouteVar.header.setVisible()
  // }

  
  const [isOpenInstitutions, setIsOpenInstitutions] = useState<boolean>(false)
  const {data:institutionsList, } = useInstitutionshQuery()
  // console.log('institutionsList',institutionsList)
  // <div className='pl-7 text-gray-400 hover:bg-gray-50 hover:text-gray-900 text-base  cursor-pointer'>hi</div>
  const instiClick=()=>{
    setIsOpenInstitutions(!isOpenInstitutions) 
    editCpInstitutionVar.selPermissionNum(0) 
    // if(isOpenInstitutions){
    //   setIsOpenInstitutions(false)  
    // }else{
    //   submitInstitutions()
    //   setIsOpenInstitutions(true)
    // }
  }
  const navigation = [
    { name: '기본화면', href: PAY_HOME, icon: HomeIcon, current: true, child:null },
    { name: '구성원', href: CP_PAY_MEMBER_ROUTE_NAME, current: false, child:null },
    { name: '기관', href: '#', icon: UserGroupIcon, current: false, child:true, onClick: instiClick},
    // { name: 'Directory', href: '#', icon: MagnifyingGlassCircleIcon, current: false, child:null },
    // { name: 'Announcements', href: '#', icon: MegaphoneIcon, current: false, child:null },
    // { name: '설정', href: cp_pay_setting_route_fn(Number(payid)), icon: MapIcon, current: false, child:null },
  ]

  const [logout] = useLogout()
  //최상단에 보여짐
  const HomeComponent=<div className='h-8 px-2 cursor-pointer' onClick={()=>{
    setSidebarOpen(false);navigate(PAY_HOME)}}>Home</div>
  const Logoutcomponent=(
    <div className='w-full flex justify-between items-center flex-shrink-0 border-t border-gray-200 p-4'>
      <div className='cursor-pointer' onClick={()=>{logout();window.location.reload();}}>로그아웃</div>
      <div className='cursor-pointer' onClick={()=>{navigate(USER_PROFILE_ROUTE_NAME);setSidebarOpen(false);}}>내 정보</div>
    </div>
  )
  
  return (
    <div className='w-full flex justify-center items-center'>
      <div className="flex w-full max-w-screen-lg h-full min-h-screen">
        {isShow && <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                 {/* style={{width:'208px'}} */}
                 {/* w-full max-w-xs */}
                <Dialog.Panel className="relative max-w-[300px] flex  flex-1 flex-col bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <div className='h-6 w-6 text-white'>X</div>
                        {/* <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                        {HomeComponent}
                      {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      /> */}
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="space-y-1 px-2">
                        {navigation.map((item,index) => {
                          if(item.name ==='기관' && institutionsList.length === 0){
                            return <div key={'navi'+index}></div>
                          }
                          return( //모바일에서 보여지는 메뉴
                          <div key={'navi'+index}>
                            <button
                              key={item.name}
                              // href={item.href}
                              onClick={()=>{
                                if(item.onClick){
                                  item.onClick()
                                  return
                                }
                                setSidebarOpen(false)
                                // editRouteVar.header.setVisible(false)//왼쪽 창 닫기
                                navigate(item.href)
                                // navigate(item.href)
                              }}
                              className={classNames(
                                'w-full ',
                                item.current
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                              )}
                            >
                              <div className={classNames(
                                  item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                  'mr-4 h-6 w-6'
                                )}>A</div>
                              {/* <item.icon
                                className={classNames(
                                  item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                  'mr-4 h-6 w-6'
                                )}
                                aria-hidden="true"
                              /> */}
                              {item.name}
                            </button>
                            <div className="w-full ">{item.child&&item.name==='기관'&&isOpenInstitutions?<InstitutionChild institutionsList={institutionsList} setSidebarOpen={setSidebarOpen}/>
                              :<div></div>}</div>
                          </div>
                        )}
                        )}
                        <LayOutSettingBtn setSidebarOpen={setSidebarOpen} />
                      </div>
                    </nav>
                  </div>
                  {Logoutcomponent}
                  {/* <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                            <div className='h-8'>Bot_H</div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            Whitney Francis
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                        </div>
                      </div>
                    </a>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>}

        {/* Static sidebar for desktop w-64*/}
        { <div className={`${isShow?'hidden md:flex md:flex-shrink-0':'hidden '}`}>
          <div className=" h-screen flex w-64 flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
              <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                  {HomeComponent}
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  /> */}
                </div>
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="space-y-1 px-2">
                    {navigation.map((item,index) => {
                      if(item.name ==='기관' && institutionsList.length === 0){
                        return <div key={'navi'+index}></div>
                      }

                      return( //큰 사이즈되면 펼친 상태에서 보여지는 메뉴
                    <div key={'navi'+index}>
                      
                      <button
                        key={item.name}
                        onClick={item.onClick?item.onClick:()=>navigate(item.href)}
                        // href={item.href}
                        className={classNames(
                          'w-full ',
                          item.current
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <div className={classNames(
                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'mr-3 h-6 w-6'
                              )}>A</div>
                        {/* <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 h-6 w-6'
                          )}
                          aria-hidden="true"
                        /> */}
                        {item.name==='기관'&&isOpenInstitutions&& <GoTriangleDown />}
                        {item.name}
                      </button>
                      <div className="w-full ">{item.child&&item.name==='기관'&&isOpenInstitutions?<InstitutionChild institutionsList={institutionsList} setSidebarOpen={setSidebarOpen}/>
                      :<div></div>}</div>
                    </div>
                    )}
                    )}
                  </div>
                  <LayOutSettingBtn setSidebarOpen={setSidebarOpen}/>
        
                </nav>
                <div className='flex'>
                    {Logoutcomponent}
                  </div>
              </div>
             
              {/* <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a href="#" className="group block w-full flex-shrink-0">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Whitney Francis</p>
                      <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                    </div>
                  </div>
                </a>
              </div> */}
            </div>

          </div>
        </div>}

    {/* h-12 */}
        <div className="w-full flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="md:hidden">
          {isShow && <div className=" flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
              <div >
                {/* 햄버거 - 상단 바 */}
                {HomeComponent}
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                /> */}
              </div>
               <div className='w-12 flex justify-center items-center'>
                <div
                  className="-mr-3 inline-flex  w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 cursor-pointer"
                  onClick={() => setSidebarOpen(true)}
                >
                  {/* <span className="sr-only">Open sidebar</span> */}
                  <div className='flex justify-center items-center'>
                    <RxHamburgerMenu className='w-5 h-5' />
                  </div>
                  {/* <div className='h-5 w-5 flex items-center justify-center'>
                  <HamburgerIcon className="h-5 w-5" />
                  </div> */}

                </div>
              </div>
            </div>}
          </div>

          <div className='flex flex-1'>
            <Outlet />
          </div>

          {/* <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
                <div>main</div>
              
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full rounded-lg border-2 border-dashed border-gray-200" />
              </div>
              
            </main>

          </div> */}


        </div>
      </div>
    </div>
  )
}


export default LayoutLeft;