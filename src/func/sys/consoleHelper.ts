
export const ConsoleHelper = (data:any, where='') => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.log(data, 'where : '+ where, 'Helper');
    } 
  
  }
 
