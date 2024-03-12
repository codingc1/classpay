
import React from "react";

import { useNavigate } from "react-router";

import {  useApolloClient, useReactiveVar } from "@apollo/client";//useQuery,
import { useEffect } from "react";

import { useState } from "react";
import { routeVar } from "../../../../stores/route-info-store";
import { logoutFunc } from "../../../../func/sys/auth/logout-func";
import { useMe } from "../../../../hooks/user/useMe";
import { chkAuth } from "../../../../func/sys/auth/chkAuth";

// import nuberLogo from "../../../images/eats-logo.svg";
//15.17 Header part one
//15.18 폰트어썸 설치 리덕스처럼 data 바로 가져오기 
// interface IHeaderProps {
//   email: string
// }

export const AddMenu= ({isMouseOver, setIsMouseOver}:{
  isMouseOver:boolean, setIsMouseOver:React.Dispatch<React.SetStateAction<boolean>>}) => { //: React.FC 
  const contentTitle = useReactiveVar(routeVar).title;
  const client = useApolloClient();

    const { data,  } = useMe();
    // const { data:thisyearData,  loading:thisyearLoading} = useThisyear();

    // const { data:tagData, loading } = useQuery(TAG_FETCH_QUERY);
    // const { data:tagData, loading } = useQuery(GRADE_TAGLIST_QUERY);
    const [selHeader, setSelHeader] = useState(["","","","",""]) //border-blue-700
    const [selHeaderBorder, setSelHeaderBorder] = useState(["","","","",""])
    // const [isMouseOver, setIsMouseOver] = useState(false)
    // const [selHeader1, setSelHeader1] = useState("")
    // const [selHeader2, setSelHeader2] = useState("")
    // const [selHeader3, setSelHeader3] = useState("")
    let navigate = useNavigate();

    useEffect(()=>{
      if(contentTitle === '행발 도우미' || contentTitle ==="창체 도우미"){
        setSelHeader(['text-blue-700','','','',""])
        setSelHeaderBorder(["border-blue-700","","","",""])
      }else if(contentTitle === "행발 공유"){
        setSelHeader(['text-blue-700','','','',""])
        setSelHeaderBorder(["border-blue-700","","","",""])
      }else if(contentTitle ==="행발 도우미M"){
        setSelHeader(['','','text-blue-700','',""])
        setSelHeaderBorder(["","","border-blue-700","",""])
      }else if(contentTitle ==="사용방법"){
        setSelHeader(['','','','text-blue-700',""])
        setSelHeaderBorder(["","","","border-blue-700",""])
      }else if(contentTitle ==="다이어리"){
        setSelHeader(['','','','',"text-blue-700"])
        setSelHeaderBorder(["","","","","border-blue-700"])
      }
      else{
        setSelHeader(['','','','',""])
        setSelHeaderBorder(["","","","",""])
      }
      // return function cleanup() {
      // }
    },[contentTitle])
    // const hangShareMove=(str:string)=>{ //행발공유 - 누구나 들어가게 수정함..
    //   // if(!data )return; //|| !tagData
    //   // if(data.me.shrFullNum <1){
    //   //   alert('문장을 연결하여 완성한 행발을 공유하는 곳 입니다\n공유활성화를 위해 하나 이상 공유하시면 이용하실 수 있습니다\n행발도우미에서 문장상자를 이용하여 문단을 공유가능 합니다')
    //   //   return
    //   // }
    //   // navigate(HANGBAL_SAHRE_ROUTE_NAME);
    //   navigate({
    //     pathname: HANGBAL_SAHRE_ROUTE_NAME+"/"+str, 
    //   })
    // }



    const makeGrid =()=>{
      return "grid-cols-4"
      // if (process.env.NODE_ENV === 'production'){
      //   return "grid-cols-4"
      // }else{
      //   return "grid-cols-5"
      // }
    }
    //다이어리 하위 메뉴 나타날 것인가
    // const isDiaryMenuShow =()=>{
    //   if(thisyearData?.thisyearsQuery.results && thisyearData?.thisyearsQuery.results.length >0 && settingRedux.isDiary )return true
    //   return false
    // }
//sm:px-6 px-0 py-4
    return ( //mx-auto flex items-center justify-center
      <div className="mx-auto max-w-screen-lg   ">

        {/* <HederMenuBigMenu isMouseOver={isMouseOver} setIsMouseOver={setIsMouseOver} selHeader={selHeader} 
          selHeaderBorder={selHeaderBorder} makeGrid={makeGrid} /> */}
        {/* <div>h-20</div> */}
      
      {/* 헤더 아래 추가 공간 */}
        {isMouseOver &&
        <div className="w-full flex h-32  xl:py-1 text-xs
           border" onMouseLeave={()=>setIsMouseOver(false)}>
          <div className="" style={{width:'70px'}}></div>
          <div  className={` h-32 py-1 grid ${makeGrid()} `} style={{width:'400px'}}>
            <div className="">
                <div className="text-center py-1 cursor-pointer hover:text-blue-700 "
                  onClick={()=>{
                    setIsMouseOver(false);
                    // navigate(HANGBAL_ROUTE_NAME)
                    }}>물고기경제 리스트</div>
                <div className="text-center py-1 cursor-pointer hover:text-blue-700"
                    onClick={()=>{
                      setIsMouseOver(false);
                      // navigate(HANGBAL_COMBINATION_HOME_ROUTE_NAME)
                }}>학생 등록</div>
                {/* <div className="text-center py-1 text-sm cursor-pointer hover:text-blue-700"
                  onClick={()=>{
                    setIsMouseOver(false);
                    hangShareMove(routeNamePath.HANGBAL_SAHRE.ele)
                  }}>행발 공유마당</div>  */}
                
                  
                  
            </div>
            <div className="">
                <div className="text-center py-1  cursor-pointer hover:text-blue-700"
                  onClick={()=>{
                    setIsMouseOver(false);
                    // navigate(HANGBAL_MID_ROUTE_NAME)
                    }}>행발도우미<span className="text-xs">(중고)</span></div>
                <div className="text-center py-1  cursor-pointer hover:text-blue-700"
                  onClick={()=>{
                    setIsMouseOver(false);
                    // hangShareMove(routeNamePath.HANGBAL_SAHRE.mid)
                  }}>행발 공유마당<span className="text-xs">(중고)</span></div> 
                  {/* <div className="text-center py-1 text-sm cursor-pointer hover:text-blue-700"
                  onClick={()=>{
                    setIsMouseOver(false);
                    navigate(CHANGECHE_MID_ROUTE_NAME)
                  }}>창체</div>  */}
            </div>
            {/* -mt-3" */}
              <div className="">
                  {/* process.env.NODE_ENV === "development"  */}
                 {<div className="text-center py-1 text-sm cursor-pointer hover:text-blue-700"
                  onClick={()=>{
                    setIsMouseOver(false);
                    // navigate(CLASS_PAY_SIGNUP_ROUTE_NAME)
                    }}>{chkAuth.isTest(data)? '학급페이 가입하기':''}</div>}

              </div>
              <div className="">
                <div className="text-center py-1 text-sm cursor-pointer hover:text-blue-700"
                  onClick={()=>{
                    // setIsMouseOver(false);
                    // navigate(EXPLANATION_HEADER_MENU_ROUTE_NAME)
                    }}>행발사용방법</div>

              </div>
    

          </div>
        </div>  
        }
      </div>
    );
  };