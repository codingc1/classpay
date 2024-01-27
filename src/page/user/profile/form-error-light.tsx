import React from "react";

interface IFormErrorProps {
    errorMessage: string;
  }
  
  export const FormErrorLight: React.FC<IFormErrorProps> = ({ errorMessage }) => (
    <span role="alert" className=" text-xs font-normal text-red-500 -mt-3 -mb-1">{errorMessage}</span>
  );