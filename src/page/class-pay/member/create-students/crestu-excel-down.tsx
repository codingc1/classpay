import { useEffect, useRef, useState } from 'react';
// crol 보고 엑셀파일 만들자..
//npm uninstall --save-dev @types/react-csv

//https://kkhcode.tistory.com/12
import * as XLSX from "xlsx";

export const CrestuExcelDown = () => {

	const data = [
    {
      id: 1,
      title: '집에 가고싶어요',
      content: '너무 졸려 가고싶어요.'
    }, {
      id: 2,
      title: '오늘은 뭐하지',
      content: '퇴근 하고 뭐할까??'
    }, {
      id: 3,
      title: '저녁은 어떤거로?',
      content: '저녁은 치킨인가 피자인가 고민이다.'
    }
  ]

  const excelFileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const excelFileExtension = '.xlsx';
  const excelFileName = '작성자';

  const excelDownload = (excelData: any) => {
    // const ws = XLSX.utils.aoa_to_sheet([
    //   [`작성자_kkhcode`],
    //   [],
    //   ['제목', '내용']
    // ]);
    // excelData.map((data: any) => {
    //   XLSX.utils.sheet_add_aoa(
    //     ws,
    //     [
    //       [
    //         data.title,
    //         data.content
    //       ]
    //     ],
    //     {origin: -1}
    //   );
    //   //<-- 행 사이즈
    //   ws['!cols'] = [ 
    //     { wpx: 200 },
    //     { wpx: 200 }
    //   ]
    //   return false;
    // });
    // const wb: any = {Sheets: { data: ws }, SheetNames: ['data']};
    // const excelButter = XLSX.write(wb, { bookType: 'xlsx', type: 'array'});
    // const excelFile = new Blob([excelButter], { type: excelFileType});

    // 엑셀 파일 생성 
    const wb = XLSX.utils.book_new(); 
    // 시트 생성 
    const ws = XLSX.utils.json_to_sheet([ 
      { id: "물고기반1",비밀번호:'1111',이름:'박지민', 번호: 1 }, 
      { id: "물고기반2",비밀번호:'1111',이름:'김지수', 번호: 2 }, 
      { id: "물고기반3",비밀번호:'1111',이름:'이혜인 ', 번호: 3 }, 
    ],
    {header: ["번호","이름","id","비밀번호", ]},
    ); 
    const wscols = [ //https://github.com/SheetJS/sheetjs/blob/master/tests/write.js#L14-L19
      {wch: 10},
      {wch: 10},
      {wch: 10}, // "characters"
      {wch: 15}, // "pixels"
    ];
    ws['!cols'] = wscols;
    // ws.getCell('A'+1).alignment = { horizontal: 'center',vertical :'middle' };
    // ws.getCell('B'+1).alignment = { horizontal: 'center',vertical :'middle' };
    // ws.getCell('C'+1).alignment = { horizontal: 'center',vertical :'middle' };
    // ws.getCell('D'+1).alignment = { horizontal: 'center',vertical :'middle' };
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); 
    XLSX.writeFile(wb, "studentexample.xlsx");
    // 출처: https://tarot-story.tistory.com/21 [UI Builder:티스토리]
    // FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
  }

	return (
    	<div>
        	<button className=' text-blue-400 hover:text-blue-600' onClick={() => excelDownload(data)}>예시 엑셀 다운로드</button>
        </div>
    );
}