import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="mt-4 border-zinc-700 border-2 border-opacity-60 p-2 bg-zinc-900 rounded-lg hover:bg-zinc-700 hover:border-zinc-900 transform transition duration-400 hover:scale-105 active:scale-95">
      {children}
    </button>
  );
};

export default Button;
