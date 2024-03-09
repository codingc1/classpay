import React from "react";

interface IButtonProps {
  loading: boolean;
  actionText: string;
  submit:()=>void
}
//"bg-gray-300 pointer-events-none"
//bg-lime-600 hover:bg-lime-700
export const LoginButton: React.FC<IButtonProps> = ({
  loading, actionText, submit}) => (
  <button //role="button"
    onClick={submit}
    className={`w-full text-lg font-medium focus:outline-none text-white py-2  transition-colors ${
      "bg-indigo-500 hover:bg-indigo-700"
    }`}
  >
    {loading ? "Loading..." : actionText}
  </button>
);