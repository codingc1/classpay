import { readExcel_file } from "../../../../utils/readExcel";
import { CrestuExcelDown } from "./crestu-excel-down";




export const CrestuExcelUpload=({selectedFile, theInputKey, setTmpExcelData, jsonOption,}:// onChangExcel
    {selectedFile:string, //setSelectedFile: React.Dispatch<React.SetStateAction<string>>, 
    // setInputFileName: React.Dispatch<React.SetStateAction<string>>,
    theInputKey:string, 
    // excelData:IExcelData[],
    // setExcelData: React.Dispatch<React.SetStateAction<IExcelData[]>>
    setTmpExcelData: (arr:any[])=>void,//</React.SetStateAction> React.Dispatch<React.SetStateAction<any[]>>, 
    // onChangExcel:(e:any)=>void,
    jsonOption:{colName:string,keyName:string, isNullable?:boolean}[], //엑셀파일 컬럼명과 json key명
  })=>{
    const handleFileInput =(e:any)=>{
        if(typeof e.target.files[0] !== 'object' ){
          return;}
        // console.log(typeof e.target.files[0])
        if(  e.target.files[0].size > 220000){
          alert('파일의 사이즈가 큽니다.')
          return;
        } //41k = 42431 //2100k 2243100
        if(e.target.files[0].name.slice(-4) !== 'xlsx'){
          alert('xlsx 형식의 파일만 가능합니다.')
          return;
        }
        handlePost(e.target.files[0])
        // onChangExcel( e.target.files[0],)  
          // setInputFileName(String(e.target.files[0].name))
      }
      const handlePost=async(file:File)=>{
        if(typeof file !=='object'){
          alert('파일을 등록해 주세요.')
          return
        }
        if(typeof file ==='object'){
          if(typeof file['name'] === 'string' 
          // @ts-ignore
            && file['name'].slice(-4) !== 'xlsx'){
            alert('xlsx 형식의 파일만 가능합니다.')
            return;
          }
          if( typeof file['size'] === 'number' 
          && file['size'] > 220000){
            alert('파일의 사이즈가 큽니다.')
            return;
          }
        } 
          // const formData = new FormData();
          // formData.append('file', selectedFile);
      try{
        const [jsonData, ] = await readExcel_file(file, 0) as any
        if (jsonData) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
         //@ts-ignore 
         const len = jsonData.length
        //  console.log('len', len)
         //인성 학업
        //  type uploadHangType = Pick<Hang, "user_id" | "kind" | "tag" | "tagArray" | "sentence" | "mark" | "schoolGrade">
         const dataArr:any[] =[]
         for (let i = 0; i < len; i++) {     
             const hangData = jsonData[i]
            //  console.log(hangData,'idata')
             const obj:any ={}
             // console.log(hangData['tag1'])
             //jsonOption - {colName:string,keyName:string}[]
             for(let j=0; j<jsonOption.length; j++){
               const {colName, keyName, isNullable} = jsonOption[j]
               if(!hangData[colName] && !isNullable){
                //  console.log('!!!---colName이 없습니다.', colName)
                 throw new Error('엑셀 '+(j+1)+'번째 줄에 '+colName+'이(가) 없습니다.')
                //  continue
               }
               obj[keyName] = hangData[colName]
             }
             dataArr.push(obj)//hangData
             //마지막 줄이면
              if(i === len-1){
                setTmpExcelData(dataArr)
              }
         }//tagArray만들기
         
        //  console.log(dataArr.length, 'excel dataArr')
        // 비밀번호=>password, 이름=>name, 번호=>number
        //  const korToEng = dataArr.map((data:any)=>{
        //   const {학생이름, 학생번호, 학생비밀번호} = data
        //   return {name:학생이름, number:학생번호, password:학생비밀번호}
        //  })
         
        }
            
        }catch(err){
            // console.log(err, 'err')
          alert(err)
        }
        }

//예시 엑셀 파일 생성 react-csv https://mingmeng030.tistory.com/268
return(
    <div className="w-full">
      <div className="flex justify-between">
        <div>엑셀파일로 학생 추가</div>
        <CrestuExcelDown />
      </div>
    
    <div className="w-full  flex mt-2 px-5 py-5 border-blue-400 border-2 justify-center">
          <input type="file" name="file" onChange={e => handleFileInput(e)} defaultValue={''} 
          accept='.xlsx'
            className="border-2 border-lime-400 w-44"
            key={theInputKey || ''} />
            {/* <button className='w-16 btn py-0 px-0' onClick={handlePost}>확인</button> */}
    </div>

</div>
)
}