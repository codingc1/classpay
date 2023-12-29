// import XLSX from 'xlsx'
import * as XLSX from 'xlsx';
import { ConsoleHelper } from '../func/sys/consoleHelper';

//node하고 다름.. https://velog.io/@jiwonyyy/sheetjs%EB%A1%9C-excel-%ED%8C%8C%EC%9D%BC-importexport-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
export async function readExcel_file(file:File, num?:number) { //시트number를 받음
    return new Promise(async function (resolve, reject) {
        ConsoleHelper('start readExcel_file');
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e: ProgressEvent<FileReader>) => {
            if (!e.target) return;
            const bufferArray = e.target.result;
            const fileInformation = XLSX.read(bufferArray, {
                type: 'buffer', cellText: false, cellDates: true, 
            });
            const sheetName = fileInformation.SheetNames[num?num:0];
            const rawData = fileInformation.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(rawData);

            resolve([data, sheetName])
    };


    })
}