import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const MainCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative h-screen w-screen">
      <div className="flex justify-center items-center min-h-full py-4">
        <div className="bg-neutral-800 h-min w-11/12 lg:w-10/12 lg:max-w-6xl 3xl:max-w-7xl text-center border-2 border-opacity-40 border-neutral-700 rounded-xl p-6 md:p-8 shadow-lg">
          {children}
          <Link to={"/"}>
            <Button>&larr; Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
