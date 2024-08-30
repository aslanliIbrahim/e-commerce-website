import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex gap-2 items-center justify-center mb-3">
      <p className="text-gray-500 text-transform: uppercase">
        {text1}{" "}
        <span className="text-transform: uppercase text-gray-700 font-medium">
          {text2}
        </span>{" "}
      </p>
      <p className="w-8 sm:w-12 sm:h-[2px] h-[1px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
