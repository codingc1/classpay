import {Helmet} from "react-helmet-async";
import { GoBackLogin } from "../../../components/home/go-back-login";
// import { Link } from "react-router-dom";

export const AgreePrivacy = () => { //사용
//h-screen 
return(
  <main className="flex flex-col items-center ">
    <Helmet>
      <title>물고기경제 개인정보동의</title>
    </Helmet>
    <div className="w-full max-w-2xl flex flex-col justify-center lg:mt-10">
    <p className=" text-lg">물고기경제</p>
    <p className=" text-lg">개인 정보 제공 동의</p>
    {/* <p className="ls2">이 개인정보처리방침은 <em className="emphasis">2021</em>년 <em className="emphasis">1</em>월 <em className="emphasis">1</em>부터 적용됩니다.</p> */}
    <br></br>
    <p className='lh6 bs4'><strong>수집하는 개인정보의 항목</strong><br/>
    공무원 구분, 최초임용일, 기관명, 직위, 보직구분 담당과목, 교원구분, 재직상태, 임용일, (급여내역)</p>
    <br></br>

    <p className='lh6 bs4'><strong>개인정보의 수집 및 이용 목적</strong><br/>
    회원자격 확인, 본인인증</p>
    <br></br>

    <p className='lh6 bs4'><strong>개인정보의 보유 및 이용 기간</strong><br/>
    선생님의 개인정보는 이용목적이 달성되면 지체 없이 파기합니다. <br />
    개인정보 보유 : 학교급(초,중,고), <br />
    이외 내용은 회원가입시에 동의를 받았습니다.</p>
    <br></br>

      {/* <ul className="list_indent2 mgt10">
        <p className="ls2">1. 홈페이지 회원가입 및 관리</p>
        <p className="ls2">회원 가입의사 확인, 회원자격 유지·관리, 서비스 부정이용 방지 목적으로 개인정보를 처리합니다.</p>
        <br></br>
        <p className="ls2">2. 재화 또는 서비스 제공</p>
        <p className="ls2">서비스 제공, 콘텐츠 제공을 목적으로 개인정보를 처리합니다.</p>
      </ul>
      <br></br> */}

     


</div>
  <GoBackLogin />
  {/* <a href="/" className="hover:underline text-lime-600">Go back home &rarr;</a> */}
    {/* <Link className="hover:underline text-lime-600" to="/">
      Go back home &rarr;
    </Link> */}
  </main>
  )
}