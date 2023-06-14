import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="mt-4 border-slate-800 border-2 border-opacity-60 p-2 bg-slate-900 rounded-lg hover:bg-slate-800 hover:border-slate-900 active:scale-90">
      {children}
    </button>
  );
};

export default Button;
