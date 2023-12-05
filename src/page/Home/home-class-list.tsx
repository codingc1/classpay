import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import { useCpPays } from '../../hooks/cp-pay/useCpPay'
import { CP_PAY_APP_ROUTE_NAME } from '../../routers/route-name-constants'
import { editCpPayVar } from '../../stores/cp-pay-store'
import { useEffect } from 'react'
import { useMe } from '../../hooks/user/useMe'


const people = [
  {
    name: '학급명1',
    title: '학교명',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: '학급명2',
    title: '학교명',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

export default function HomeClassListComponent() {
  let navigate = useNavigate()
  const {data:meData}=useMe()
  const {data} = useCpPays(meData)
  useEffect(()=>{
    if(meData){
      console.log(meData.cp_me, 'meData 있음')
    }else{
      console.log('meData 없음')
    }
  },[meData])
  useEffect(()=>{
    if(data){
      console.log(data.cp_pays, 'data 있음')
    }else{
      console.log('data 없음')
    }
  },[data])
    //lg:grid-cols-3
    //grid grid-cols-1 gap-6 sm:grid-cols-2
  return (
    <ul role="list" className=" max-w-sm ">
      {data?.cp_pays.map((cppay) => ( //li : col-span-1 divide-y divide-gray-200 rounded-lg
        <li key={cppay.id} className="  bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6 cursor-pointer hover:bg-slate-200"
            onClick={()=>{
              editCpPayVar.setPayID(cppay.id)
              navigate(CP_PAY_APP_ROUTE_NAME+'/'+cppay.id)
            }}>
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"/>
            {/* <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={cppay.imageUrl} alt="" /> */}
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{cppay.className}</h3>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {'학급'}
                </span>
              </div>
              {cppay.classTh!== 0 && <div className='mt-1 text-gray-500 text-sm'>
                <span className=" ">{cppay.classTh}학년</span>
                <span className="ml-1   ">{cppay.classNum}반</span>
              </div>}
            </div>
            
          </div>
          {/* <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div> */}
        </li>
      ))}
      {(!data || data.cp_pays.length === 0) && <div className='w-full h-24 flex justify-center items-center'>학급이 없습니다.</div>}
    </ul>
  )
}
