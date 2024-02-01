
//cpUser 학생 회원 가입시킬때 

import { IFCreateTempStudent } from "../../page/class-pay/member/cp-create-students";



//nestjs cp-id-password-check == front와 일치
export const chkCpUser ={ //학생
   mainId:function(str:string):boolean{ 
      const reg1 =  /^[a-z0-9]{4,14}$/; //영어 숫자로만 4~14자리
      return (reg1.test(str) && isNaN( +str[0]) ); //&& !reg2.test(str) //첫글자는 숫자가 아니어야함
   },
   pass:function(str:string):boolean {
      const reg2 = /^[~`!@#$%^&*()_+=[\]\{}\/<>?a-zA-Z0-9-]+$/; //영어 숫자 특수문자만 허용 https://www.python2.net/questions-655160.htm 
      return( reg2.test(str))
   },
   passLength:function(str:string):boolean {
      return(str.length>=4 && str.length<=40)
   },
   name:function(str:string):boolean {
      //특수만자 있거나 글자수가 안맞으면 true
      //한글 영어 숫자 가능
      // console.log(str,)
      const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/
      //두글자 이상
      function isLength(strInput:string) {
        return(strInput.length > 1 && strInput.length < 14) 
      } 
      return (regExp.test(str) && isLength(str)) //하나라도 해당되면 true로 발송
   },
   passwordErrMsg:function(str:string):string {
      if(str.length<4)return '비밀번호는 4글자 이상이어야 합니다'
      if(str.length>20)return '비밀번호는 20글자 이하이어야 합니다'
      if(chkCpUser.pass(str)===false)return '비밀번호 구성에 문제가 있습니다'
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
   checkPosibleCpUser:function({mainId, password, name, number}:IFCreateTempStudent){
      if(!chkCpUser.mainId(mainId))return{ok:false, error:'id는 네글자 이상이어야 합니다'} //영어 숫자로만 4~14자리
      if(name.length<2)return{ok:false, error:'이름을 입력해 주세요'}
      if(!chkCpUser.name(name))return{ok:false, error:'이름은 두글자 이상이어야 합니다'}
      if(!chkCpUser.pass(password))return{ok:false, error:'비밀번호 구성에 문제가 있습니다'}
      if(password.length< 4 || password.length>20)return{ok:false, error:'비밀번호는 4글자 이상이어야 합니다'}
      if(number<0 || number > 9999){return{ok:false, error:'번호는 9999이하의 숫자여야 합니다'}}
      return{ok:true}
  },
   //위의것을 모두 체크해서 답해줌
   //{mainId:string, password:string, name:string, nummber:number}[]
   checkStudent:function(students : IFCreateTempStudent[]):{error:string, index:number}{
      if(students.length>50)return { error:'학생은 50명까지 가능합니다.',index:-1}
      for(let i=0; i<students.length; i++){
         const {error} = chkCpUser.checkPosibleCpUser(students[i])
         if(error)return { error, index:i}
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
}
