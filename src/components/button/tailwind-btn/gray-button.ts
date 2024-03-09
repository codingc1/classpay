


const commonStyle = 'font-medium focus:outline-none px-2 py-1 transition-colors  text-sm rounded cursor-pointer text-center'
const grayBtnStr = `${commonStyle} bg-gray-100 hover:bg-gray-200 `

export const grayBtnCss =({bg='gray-100',bghover='gray-200'}:{
    bg?:string,bghover?:string,
})=>{
    return `${commonStyle} bg-${bg} hover:bg-${bghover}`
}