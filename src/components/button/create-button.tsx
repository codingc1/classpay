import React from "react";

interface IButtonProps {
  //mainLoading: boolean;
  actionText: string;
  loading?:boolean;
  // val: {
  //   email: string,
  //   mainId: string,
  //   nickname: string,
  //   password: string,
  //   role: string,
  // }
  // isMainIdMsgObj: any,
  // isNicknameMsgObj: any,
  submit: any,
}
//"bg-gray-300 pointer-events-none"



export const CreateButton= ({
  actionText,submit,loading }:IButtonProps) => { // val, isMainIdMsgObj, isNicknameMsgObj, 

  return(
  <button  //onClick={onSubmit} type="submit"
    onClick={submit}
    className={`w-full text-lg font-medium focus:outline-none text-white py-2  transition-colors ${
      "bg-lime-600 hover:bg-lime-700"
    }`}
  >
    {loading ? "Loading..." : actionText}
  </button>
)};