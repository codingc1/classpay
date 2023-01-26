



//기본으로 대문자만
export const generateRandomEnglish = (num:number, option?:{type:string}) => {
    let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //abcdefghijklmnopqrstuvwxyz
    if(option && option.type ==='lower'){
        characters ='abcdefghijklmnopqrstuvwxyz'
    }
    
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }