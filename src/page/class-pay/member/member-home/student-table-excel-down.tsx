//https://kkhcode.tistory.com/12
import * as XLSX from "xlsx";
import { ICpStudent } from "../../../../stores/cp-students-store";

export const StudentTableExcelDown = ({students}:{students:ICpStudent[]}) => {


  const excelDownload = () => {

    // const test = [ 
    //   { id: "물고기반1",비밀번호:'qqqqqqq1',이름:'박지민', 번호: 1 }, 
    //   { id: "물고기반2",비밀번호:'qqqqqqq1',이름:'김지수', 번호: 2 }, 
    //   { id: "물고기반3",비밀번호:'qqqqqqq1',이름:'이혜인 ', 번호: 3 }, 
    // ]
    const studentsData = students.map((student)=>{
      const {mainId, name, number} = student
      return {id:mainId, 이름:name, 번호:number, 비고:''}
    })
    // 엑셀 파일 생성 
    const wb = XLSX.utils.book_new(); 
    // 시트 생성 
    //번호, 이름, id, 비고
    const ws = XLSX.utils.json_to_sheet(studentsData,
    {header: ["번호","이름","id","비고", ]},
    ); 
    const wscols = [ //https://github.com/SheetJS/sheetjs/blob/master/tests/write.js#L14-L19
      {wch: 10},
      {wch: 10},
      {wch: 15}, // "characters"
      {wch: 10}, // "pixels"
    ];
    ws['!cols'] = wscols;
    // ws.getCell('A'+1).alignment = { horizontal: 'center',vertical :'middle' };
    // ws.getCell('B'+1).alignment = { horizontal: 'center',vertical :'middle' };
    // ws.getCell('C'+1).alignment = { horizontal: 'center',vertical :'middle' };
    // ws.getCell('D'+1).alignment = { horizontal: 'center',vertical :'middle' };
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); 
    XLSX.writeFile(wb, "studentlist.xlsx");
    // 출처: https://tarot-story.tistory.com/21 [UI Builder:티스토리]
    // FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
  }

	return (
    	<div>
        	<button className=' text-blue-400 hover:text-blue-600 text-sm' onClick={() => excelDownload()}>엑셀로 다운로드</button>
        </div>
    );
}