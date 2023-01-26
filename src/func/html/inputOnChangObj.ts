

//{className:'',schoolName:'',classTh:0,classNum:0}
//fn함수 = React.Dispatch<React.SetStateAction<>
//문자와 숫자 동시에 잇는 오프젝트에 사용
  export const inputOnChangeObj = ({e, obj, fn}:
    {e: React.ChangeEvent<HTMLInputElement>, obj:{[key: string] : string|number} ,  fn:(foo:any)=>void}) => {
    const { value, name, type } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    
    if(type === 'number' ){
      const num = Number(value)
      if(typeof num === 'number' && num >=0){
        fn({
            ...obj, // 기존의 input 객체를 복사한 뒤
            [name]: num // name 키를 가진 값을 value 로 설정
          })
        // setClassPay({
        //   ...classPay, // 기존의 input 객체를 복사한 뒤
        //   [name]: num // name 키를 가진 값을 value 로 설정
        // });  
      }
    }else{
        fn({
        ...obj, // 기존의 input 객체를 복사한 뒤
        [name]: value // name 키를 가진 값을 value 로 설정
      });
    }
    
  };

  //object접근 https://velog.io/@yjs3819/Object%EB%A1%9C-State-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0