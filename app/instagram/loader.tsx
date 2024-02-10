import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-row gap-10">
      <div className="w-8 h-8 rounded-lg bg-violet-700 animate-bounce [animation-delay:1s]"></div>
      <div className="w-8 h-8 rounded-lg bg-red-700 animate-bounce [animation-delay:.3s]"></div>
      <div className="w-8 h-8  rounded-lg bg-green-700 animate-bounce [animation-delay:1s]"></div>
    </div>
  );
};

export default Loader;
