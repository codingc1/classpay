// import React from "react";
import {Helmet} from "react-helmet-async";
// import { Link } from "react-router-dom";

export const TermsConditions = () => {
//h-screen 
return(
  <div className="flex flex-col items-center ">
    <Helmet>
      <title>물고기경제 이용약관</title>
    </Helmet>
    <div className="w-full max-w-2xl flex flex-col justify-center lg:mt-10">
      <div className="w-52 mb-3 text-2xl font-mono">이용약관</div>  
      <h1 className="font-bold">제1조(목적) </h1>
      <h2>이 약관은 물고기경제에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 필요한 권리, 의무 및 책임 사항, 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.</h2>
      <br></br>

      <h1 className="font-bold">제2조(정의) </h1>
      <h2>① “이용자”란 물고기경제 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</h2>
      <h2>② ‘회원’이라 함은 물고기경제에 회원등록을 한 자로서, 계속적으로 물고기경제가 제공하는 서비스를 이용할 수 있는 자를 말합니다.</h2>
      <h2>③ ‘비회원’이라 함은 회원에 가입하지 않고 물고기경제가 제공하는 서비스를 이용하는 자를 말합니다.</h2>
      <br></br>

      <h1 className="font-bold">제3조 (약관 등의 명시와 설명 및 개정)  </h1>
      <h2>① 물고기경제는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</h2>
      <h2>② 이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다.</h2>
      <h2>② 관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 서비스의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.</h2>
      <h2>④ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.</h2>
      <br></br>

      <h1 className="font-bold">제4조(서비스의 중단)  </h1>
      <h2>① 컴퓨터 등 정보통신설비의 보수점검․교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</h2>
      <h2>② 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 고의 또는 과실이 없을 경우에는 그러하지 아니합니다.</h2>
      <h2>③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 이용자에게 통지하고 당초 “몰”에서 제시한 조건에 따라 소비자에게 보상합니다. 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 물고기경제에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.</h2>
      <br></br>

      <h1 className="font-bold">제5조(회원가입)  </h1>
      <h2>① 이용자는 물고기경제에서 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.</h2>
      <h2>② 은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</h2>
      <h2> 1. 가입신청자가 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 물고기경제의 회원재가입 승낙을 얻은 경우에는 예외로 한다.</h2>
      <h2> 2. 등록 내용에 허위, 기재누락, 오기가 있는 경우</h2>
      <h2> 3. 개인 회원 가입 시 14세 미만인 것이 확인되는 경우. (선생님이 계정을 발급한 경우 제외)</h2>
      <h2> 4. 기타 회원으로 등록하는 것이 물고기경제의 기술상 현저히 지장이 있다고 판단되는 경우</h2>
      <h2>③ 회원가입계약의 성립 시기는 물고기경제의 승낙이 회원에게 도달한 시점으로 합니다.</h2>
      <h2>④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 물고기경제에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.</h2>
      <br></br>

      <h1 className="font-bold">제6조(회원 탈퇴 및 자격 상실 등) </h1>
      <h2>① 회원은 물고기경제에 언제든지 탈퇴를 요청할 수 있으며 물고기경제는 회원탈퇴를 처리합니다.
      탈퇴시 해당 메일로 재가입을 막기 위해 아이디 이메일 주소, 닉네임은 보관합니다.</h2>
      <h2> ② 회원이 다음 각 호의 사유에 해당하는 경우, 물고기경제는 회원자격을 제한 및 정지시킬 수 있습니다.</h2>
      <h3>1. 가입 신청 시에 허위 내용을 등록한 경우</h3>
      <h3>2. 물고기경제를 이용하여 구입한 재화 등의 대금, 기타 물고기경제 이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우</h3>
      <h3>3. 다른 사람의 물고기경제 이용을 방해하거나 그 정보를 도용하는 등 질서를 위협하는 경우</h3>
      <h3>4. 물고기경제를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</h3>
      <h2>③ 회원 자격을 제한․정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 회원자격을 상실시킬 수 있습니다.</h2>
      <h2>④ 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 소명할 기회를 부여합니다.</h2>
      <h2>5. 허위 내용이나 공격적인 내용으로 게시판 분위기를 위협하는 경우</h2>
      <h2>6. 회원 가입 후 교사 인증을 하지 않고 1년이 지난 경우</h2>
      <h2>7. 교사 인증 만료 후 3년이 지난 경우</h2>
      <br></br>

      <h1 className="font-bold">제7조(회원에 대한 통지) </h1>
      <h2>① 회원에 대한 통지를 하는 경우, 회원이 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다.</h2>
      <h2>② 불특정다수 회원에 대한 통지의 경우 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.</h2>
      <br></br>

      <h1 className="font-bold">제8조(개인정보보호) </h1>
      <h2>① 물고기경제는 이용자의 개인정보 수집시 서비스제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다. </h2>
      <h2>② 물고기경제는 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. </h2>
      <h2>③ 물고기경제는 수집된 개인정보를 목적외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용·제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.</h2>
      <h2>④ 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은자, 제공목적 및 제공할 정보의 내용) 등 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제22조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.</h2>
      <h2>⑤ 개인정보 보호를 위하여 이용자의 개인정보를 취급하는 자를  최소한으로 제한하여야 하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 동의 없는 제3자 제공, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.</h2>
      <br></br>

      <h1 className="font-bold">제9조(물고기경제의 의무) </h1>
      <h2>① 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화․용역을 제공하는데 최선을 다하여야 합니다.</h2>
      <h2> 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.</h2>
      <h2>③ 상품이나 용역에 대하여 「표시․광고의 공정화에 관한 법률」 제3조 소정의 부당한 표시․광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.</h2>
      <h2>④ 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.</h2>
      <br></br>

      <h1 className="font-bold">제9조(물고기경제의 의무) </h1>
      <h2>① ID와 비밀번호에 관한 관리책임은 회원에게 있습니다.</h2>
      <h2>② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.</h2>
      <h2>③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 물고기경제에 통보하고 물고기경제의 안내가 있는 경우에는 그에 따라야 합니다.</h2>
      <br></br>

      <h1 className="font-bold">제11조(이용자의 의무) 이용자는 다음 행위를 하여서는 안 됩니다. </h1>
      <h2>1. 신청 또는 변경시 허위 내용의 등록</h2>
      <h2> 2. 타인의 정보 도용</h2>
      <h2>3. 물고기경제에 게시된 정보의 변경</h2>
      <h2>4. 물고기경제가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</h2>
      <h2>5. 물고기경제 기타 제3자의 저작권 등 지적재산권에 대한 침해</h2>
      <h2>6. 물고기경제 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</h2>
      <h2>7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위</h2>
      <h2>8. 과도한 물고기경제 사용</h2>
      <br></br>

      <h1 className="font-bold">제12조(저작권의 귀속 및 이용제한) </h1>
      <h2>① 물고기경제가 작성한 저작물에 대한 저작권 기타 지적재산권은 물고기경제에 귀속합니다.</h2>
      <h2>② 이용자는 물고기경제를 이용함으로써 얻은 정보 중 물고기경제에게 지적재산권이 귀속된 정보를 “물고기경제의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</h2>
      <h2>③ 물고기경제는 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.</h2>
      <br></br>

      <h1 className="font-bold">제13조(분쟁해결) </h1>
      <h2>① 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 통보해 드립니다.</h2>
      <h2>② 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</h2>
      <br></br>

      <h1 className="font-bold">제14조(재판권 및 준거법) </h1>
      <h2>① 물고기경제와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.</h2>
      <h2>② 물고기경제와 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용합니다.</h2>

      <br></br>
    </div>


  
    <a href="/" className="hover:underline text-lime-600">Go home &rarr;</a>

  </div>
  )
}