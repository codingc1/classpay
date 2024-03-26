// import React from "react";
import {Helmet} from "react-helmet-async";

import {  AiOutlineHome, } from "react-icons/ai";
import { GoBackLogin } from "../../../components/home/go-back-login";
// import { Link } from "react-router-dom";

export const PrivacyPolicy = () => { 
//h-screen 
return(
  <main className="flex flex-col items-center ">
    <Helmet>
      <title>물고기 교실경제 개인정보 처리방침</title>
    </Helmet>

    <div className="w-full max-w-2xl flex flex-col justify-center lg:mt-10">
      <div className=" py-10 flex items-center">
        {/* <a href="/" className="hover:underline text-lime-600">Go back home &rarr;</a> */}
        <a href="/" className="px-3 cursor-pointer hover:text-blue-600"><AiOutlineHome size={24} /></a>
        <a href="/" className="text-xl font-bold underline  hover:text-blue-600 cursor-pointer">물고기 교실경제 개인정보 처리방침</a>
      </div>
    <p className="ls2 lh6 bs5 ts4"><em className="emphasis">물고기경제('물고기 교실경제'이하 '물고기경제')</em>은(는) 「개인정보 보호법」 제30조에 따라 정부주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 
    원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
    <p className="ls2">이 개인정보처리방침은 <em className="emphasis">2024</em>년 <em className="emphasis">3</em>월 <em className="emphasis">4</em>부터 적용됩니다.</p>
    <br></br>
    <p className='lh6 bs4'><strong>제1조(개인정보의 처리 목적)</strong><br/><br/><em className="emphasis">물고기경제('물고기경제'이하  '물고기경제')</em>
    은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 겨우에는 
    「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
    <br></br>
      <ul className="list_indent2 mgt10">
        <p className="ls2">1. 홈페이지 회원가입 및 관리</p>
        <p className="ls2">회원 가입의사 확인, 회원자격 유지·관리, 서비스 부정이용 방지 등의 목적으로 개인정보를 처리합니다.</p>
        <br></br>
        <p className="ls2">2. 재화 또는 서비스 제공</p>
        <p className="ls2">서비스 제공, 콘텐츠 제공 등의 목적으로 개인정보를 처리합니다.</p>
      </ul>
      <br></br>

      <p className='lh6 bs4'><strong>제2조(개인정보의 처리 및 보유 기간)</strong>
      <br></br>
      <br></br>
      ① <em className="emphasis">물고기경제</em>은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 
      내에서 개인정보를 처리·보유합니다.
      <br></br>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
      <ul className='list_indent2 mgt10'>
        <li className='tt'>1.홈페이지 회원가입 및 관리</li>
        <li className='tt'>홈페이지 회원가입 및 관리와 관련한 개인정보는 수집.이용에 관한 동의일로부터 지체없이 파기 까지 위 이용목적을 위하여 보유.이용됩니다.</li>
        <li>보유근거 : 정보통신망 이용촉진 및 정보보호에 관한 법률 제 44조의5 및 시행령 제 29조</li>
        <li>관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년</li>
      </ul>
      <br></br>
      <p className="lh6 bs4"><strong>제3조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)</strong></p><br></br>
        <p className="ls2">① 정보주체는 물고기경제에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
        <p className='sub_p'>② 제1항에 따른 권리 행사는물고기경제에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 
        등을 통하여 하실 수 있으며 물고기경제은(는) 이에 대해 지체 없이 조치하겠습니다.</p>
        <p className='sub_p'>③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.
        이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p>
        <p className='sub_p'>④ 개인정보 열람 및 처리정지 요구는  「개인정보 보호법」  제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.</p>
        <p className='sub_p'>⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</p>
        <p className='sub_p'>⑥ 물고기경제은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</p>
        <br></br>
        <p className='lh6 bs4'><strong>제4조(처리하는 개인정보의 항목 작성) </strong><br></br> ① <em className="emphasis">물고기경제</em>은(는) 다음의 개인정보 항목을 처리하고 있습니다.</p>
          <br />
          회원가입 및 관리, 서비스 제공 등을 위해 처리하는 개인정보의 항목은 다음과 같습니다.<br />
          회원가입 : 아이디, 비밀번호, 이메일, 사용자 역할<br />
          서비스 : 학급명<br />
          결제정보 : (신용카드 정보) 카드사명, 카드 번호, 소유자명, 생년월일, 소유자 연락처 <br />
          환불 정보 : (계좌 정보) 은행명, 예금주명, 계좌번호<br />
          상담 : 이름, 휴대전화 번호, 이메일<br />
          기타 : IP정보, 쿠키, 접속 일시, 서비스 이용기록, OS종류 및 버전<br />
          <br />
        <br></br>
        
        <p className='lh6 bs4'><strong>제5조(개인정보의 파기)</strong></p>
        <p className='ls2'>
            <br></br>① 물고기경제은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            <br></br>② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 
            해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
            <br></br>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
            <br></br>1. 파기절차<br></br> 물고기경제 은(는) 파기 사유가 발생한 개인정보를 선정하고, 물고기경제 의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
            <br></br>
        </p>
          <p className='sub_p mgt10'></p>
          <br></br>
          <p className='lh6 bs4'><strong>제6조(개인정보의 안전성 확보 조치)<em className="emphasis">
            <br></br>물고기경제</em>은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</strong></p>
          <p className='sub_p mgt10'>1. 정기적인 자체 감사 실시<br></br> 개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.
          <br></br>2. 개인정보 취급 직원의 최소화 및 교육<br></br> 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
          <br></br>3. 개인정보의 암호화
          <br></br> 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
          <br></br>
        </p>
        <br></br>
        <p className="lh6 bs4"><strong>제7조(개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)</strong></p>
        <br/><br/>
        <p className="ls2">① 물고기경제 은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
        ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
        가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
        나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구-인터넷 옵션-개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
        다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다. <br/><br/></p>

       
        <p className='sub_p mgt30'><strong>제8조 (개인정보 보호책임자) </strong><br/><br/></p>
        <p className='sub_p mgt10'> ①  <span className='colorLightBlue'>물고기경제</span> 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 
        개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
        
        <ul className='list_indent2 mgt10'>
          <li className='tt'>▶ 개인정보 보호책임자, 개인정보 보호 담당 </li>
          <li>성명 :조규창</li><li>직책 :제작자</li>
          <li>직급 :제작자</li><li>연락처 : codingc@hanmail.net, </li>
        </ul>
          <p className='sub_p'>② 정보주체께서는 물고기경제 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 물고기경제은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p>
          
          <br />
          <p className='sub_p mgt30'><strong>제9조 (개인정보의 제3자 제공 및 위탁, 국외 이전) </strong></p>
          <p className='sub_p mgt10'> ①  <span className='colorLightBlue'>물고기경제</span> 은(는) 이용자의 개인정보를 사전 동의 혹은 법령에 정해진 절차 없이 제3자에게 제공하지 않습니다.</p>
          <p>물고기경제는 이용자의 개인정보를 개인정보의 처리 목적에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 ‘개인정보 보호법’ 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공하고 그 이외에는 제공하지 않습니다.</p>  

          <p className='sub_p'>② <span className='colorLightBlue'>물고기경제</span> 는 편리하고 더 나은 서비스 제공을 위해 개인정보 처리 업무를 외부 전문 업체에 위탁하여 운영하고 있습니다.</p>
          <br />
          <p>[개인정보 국내 처리 위탁]</p>
          토스페이먼츠 : 결제 서비스 제공<br />
          Amazon Web Service Inc. : 서버 호스팅<br />
          Typeform, Google form : 설문조사<br />
          <br></br>



          <p className='lh6 bs4'><strong>제10조(권익침해 구제방법)</strong></p>
        <br></br>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
        <br></br>
        <p className='sub_p mgt30'>
          1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)<br></br>
          2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)<br></br>
          3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)<br></br>
          4. 경찰청 : (국번없이) 182 (cyberbureau.police.go.kr)<br></br>
        「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여
         공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
        <br></br>
        ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.</p>
        <br></br>
        <p className='lh6 bs4'><strong>제12조(개인정보 처리방침 변경)</strong></p>
        <br></br>
        <p className='sub_p'>① 이 개인정보처리방침은 2024년 3월 4부터 적용됩니다.</p>
        <p className='sub_p'>② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다. </p>
      <br></br>

</div>
  <GoBackLogin />
  {/* <a href="/" className="hover:underline text-lime-600">Go back home &rarr;</a> */}
    {/* <Link className="hover:underline text-lime-600" to="/">
      Go back home &rarr;
    </Link> */}
  </main>
  )
}