import React from "react";

interface IFormErrorProps {
    errorMessage: string;
    isError: boolean;
  }
  
  export const FormErrorXsLingtColorRedBlue: React.FC<IFormErrorProps> = ({ errorMessage, isError }) => {
    let fontColorName = 'text-red-500'
    if(isError){
      fontColorName = 'text-red-500'
    }else{
      fontColorName = 'text-blue-500'
    }
    return(
      <span role="alert" className={` text-xs font-normal ${fontColorName} -mt-3 -mb-1`}>{errorMessage}</span>
    )
  };