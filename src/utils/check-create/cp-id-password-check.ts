
//cpUser 학생 회원 가입시킬때 

import { IFCreateTempStudent } from "../../page/class-pay/member/cp-create-students";



//nestjs cp-id-password-check == front와 일치
export const chkCpUser ={ //학생
   // mainId:function(str:string):boolean{ 
   //    const reg1 =  /^[a-z0-9]{4,14}$/; //영어 숫자로만 4~14자리
   //    return (reg1.test(str) && isNaN( +str[0]) ); //&& !reg2.test(str) //첫글자는 숫자가 아니어야함
   // },
   mainIdLen:function(str:string):boolean{ //4글자 이상
      return (str.length>3 && str.length<20)
   },
   mainId:function(str:string):boolean{  //영어, 숫자, 한글 가능
      // const reg1 =  /^[a-z0-9]{4,14}$/; //영어 숫자로만 4~14자리
      const reg1 = /^[ㄱ-ㅎ|가-힣|a-z|0-9|]+$/; //한글 영어소문자 숫자 가능
      return (reg1.test(str) && isNaN( +str[0]) ); //&& !reg2.test(str) //첫글자는 숫자가 아니어야함
   },
   // pass:function(str:string):boolean {
   //    const reg2 = /^[~`!@#$%^&*()_+=[\]\{}\/<>?a-zA-Z0-9-]+$/; //영어 숫자 특수문자만 허용 https://www.python2.net/questions-655160.htm 
   //    return( reg2.test(str))
   // },
   // passLength:function(str:string):boolean {
   //    return(str.length>=4 && str.length<=40)
   // },
   pass:{
      before : function(str:string):boolean { //기존 cpUser의 비번 정규식
         //영문,숫자,특수문자 중 2종류 이상
         const reg2 = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_+=[\]\{}\/<>?]).{4,20}$/;
         // const reg2 = /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]$/; //{8,} //새로 변경된 비번 (강화)
         // const reg2 = /^[~`!@#$%^&*()_+=[\]\{}\/<>?a-zA-Z0-9-]+$/; //영어 숫자 특수문자만 허용 https://www.python2.net/questions-655160.htm 
         return( reg2.test(str))
      },
      passLength:function(str:string):boolean {
         return(str.length>=4 && str.length<=20)
      },
      // passHasAlphabet:function(str:string):boolean { //영문자가 있는지
      //    const numberOrSpecialCharRegex = /[0-9!@#$%^&*()_+]/;
      //    return numberOrSpecialCharRegex.test(str);
      // },
      // hasNumberOrSpecialChar:function(str:string):boolean {//숫자나 특수문자가 있는지
      //    const numberOrSpecialCharRegex = /[0-9!@#$%^&*()_+]/;
      //    return numberOrSpecialCharRegex.test(str);
      // },
      notKorean:function(str:string):boolean { //영어로만 이루어져도 상관없음
         const reg2 = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
         // const reg2 = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_+=[\]\{}\/<>?]).{4,20}$/;
         return reg2.test(str)
      }  
   },

   name:function(str:string):boolean {
      //특수만자 있거나 글자수가 안맞으면 true //한글 영어 숫자 가능
      const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/
      //두글자 이상
      function isLength(strInput:string) {
        return(strInput.length > 1 && strInput.length < 14) 
      } 
      return (regExp.test(str) && isLength(str)) //하나라도 해당되면 true로 발송
   },
   passwordErrMsg:function(str:string):string {
      if(chkCpUser.pass.passLength(str)===false)return chkCpUser.MSG.passLen; //'비밀번호 길이는 8자 이상 20자 이하입니다.', 
      // if(chkCpUser.pass.passHasAlphabet(str)===false)return chkCpUser.MSG.passReg1; //'비밀번호에 영어가 1글자 이상 포함되어야 합니다'
      // if(chkCpUser.pass.hasNumberOrSpecialChar(str)===false)return chkCpUser.MSG.passReg2; //'비밀번호에 숫자나 특수문자가 1글자 이상 포함되어야 합니다'
      if(chkCpUser.pass.notKorean(str)===false)return chkCpUser.MSG.passReg3; //'비밀번호는 영어, 숫자, 특수문자로만 이루어져야 합니다'
      return ''
   },
   mainIdErrMsg:function(str:string):string{
      if(chkCpUser.mainIdLen(str)===false)return chkCpUser.MSG.mainIdLen; //'id는 네글자 이상이어야 합니다'
      if(chkCpUser.mainId(str)===false)return chkCpUser.MSG.mainIdReg //'id는 영어 숫자 한글로만 가능합니다'
      return ''
   },
   nameErrMsg:function(str:string):string {
      if(str.length<2)return '이름을 입력해 주세요'
      if(chkCpUser.name(str)===false)return '이름 입력 형식이 바르지 않습니다.'
      return ''
   },
   numberErrMsg:function(num:number):string {
      if(num<0 || num > 9999){return '번호는 9999이하의 숫자여야 합니다'}
      return ''
   },
   checkPosibleCpUser:function({mainId, password, name, number}:IFCreateTempStudent){ //학생만 선생님은 번호가 없음, 선생님 이메일 체크는 빠진상태
      // if(!chkCpUser.mainId(mainId))return{ok:false, error: chkCpUser.MSG.mainIdLen} //영어 숫자로만 4~14자리 'id는 네글자 이상이어야 합니다'
      // if(!chkCpUser.mainId(mainId))return{ok:false, error: chkCpUser.MSG.mainIdReg} //'id는 영어 숫자 한글로만 가능합니다'
      if(chkCpUser.mainIdErrMsg(mainId))return{ok:false, error:chkCpUser.mainIdErrMsg(mainId)}
      if(chkCpUser.nameErrMsg(name))return{ok:false, error:chkCpUser.nameErrMsg(name)}
      // if(name.length<2)return{ok:false, error:'이름을 입력해 주세요'}
      // if(!chkCpUser.name(name))return{ok:false, error:'이름은 두글자 이상이어야 합니다'}
      if(chkCpUser.passwordErrMsg(password))return{ok:false, error:chkCpUser.passwordErrMsg(password)}
      // if(!chkCpUser.pass(password))return{ok:false, error:'비밀번호 구성에 문제가 있습니다'}
      // if(password.length< 4 || password.length>20)return{ok:false, error:'비밀번호는 4글자 이상이어야 합니다'}
      if(chkCpUser.numberErrMsg(number))return{ok:false, error:chkCpUser.numberErrMsg(number)}
      // if(number<0 || number > 9999){return{ok:false, error:'번호는 9999이하의 숫자여야 합니다'}}
      return{ok:true}
  },
  //학생용
  checkPosibleStudent:function({mainId, password, name, number}:IFCreateTempStudent):{ok:boolean, error?:string}{
   if(chkCpUser.checkPosibleCpUser({mainId, password, name, number}).error){
      return chkCpUser.checkPosibleCpUser({mainId, password, name, number})
   }
   if(number === 0)return {ok:false, error:'번호는 1이상이어야 합니다'}
   return {ok:true}
  },
   //위의것을 모두 체크해서 답해줌
   //{mainId:string, password:string, name:string, nummber:number}[]
   checkStudent:function(students : IFCreateTempStudent[]):{error:string, index:number}{
      if(students.length>50)return { error:'학생은 50명까지 가능합니다.',index:-1}
      for(let i=0; i<students.length; i++){
         const { error} = chkCpUser.checkPosibleStudent(students[i])
         // const {error} = chkCpUser.checkPosibleCpUser(students[i]) //교사용이므로 0번도 되는 사례가 생김
         if(error)return { error, index:i}
         // if(students[i].number === 0)return { error:'번호는 1이상이어야 합니다', index:i}
      }     
      // const isMainIdErr = students.find(el =>chkCpUser.mainId(el.mainId)===false)
      // if(isMainIdErr)return { error:'id는 ',}
      // if(isMainIdErr)return { error:'id error',}
      // const isNamedErr = students.find(el =>chkCpUser.name(el.mainId)===false)
      // if(isNamedErr)return { error:'name error',}
      // const isPassErr = students.find(el =>chkCpUser.pass(el.mainId)===false)
      // if(isPassErr)return { error:'PassErr error',}
      return{error:'',index:-1}
   },
   MSG:{
      mainIdLen:'아이디는 네글자 이상이어야 합니다',
      mainIdReg:'아이디는 영어소문자,숫자,한글로만 가능합니다',

      passLen:'비밀번호 길이는 4자 이상 20자 이하입니다.',
      // passReg1:'비밀번호에 영어가 1글자 이상 포함되어야 합니다',
      // passReg2:'비밀번호에 숫자나 특수문자가 1글자 이상 포함되어야 합니다',
      passReg3:'비밀번호는 영어, 숫자, 특수문자로만 이루어져야 합니다',
   }
}
