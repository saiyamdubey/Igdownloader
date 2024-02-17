<<<<<<< HEAD
import React from "react";

const Loader: React.FC = () => {
  return (
    <>
      {/* <div className="flex flex-row gap-2  ">
        <div className="w-8 h-8 rounded-full bg-red-600 animate-ping"></div>
        <div className="w-8 h-8 rounded-full bg-blue-600 animate-ping [animation-delay:-.3s]"></div>
        <div className="w-8 h-8 rounded-full bg-purple-600 animate-ping [animation-delay:-.6s]"></div>
        <div className="w-8 h-8 rounded-full bg-blue-600 animate-ping [animation-delay:-.9s]"></div>
        <div className="w-8 h-8 rounded-full bg-red-600 animate-ping [animation-delay:-1s]"></div>
      </div> */}
      <div className="flex flex-row gap-4 ">
        <div className="w-8 h-15 rounded-full bg-blue-700 animate-bounce "></div>
        <div className="w-8 h-15 rounded-full bg-blue-700 animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-8 h-8 rounded-full bg-blue-600 animate-bounce [animation-delay:.4s]"></div>
        <div className="w-8 h-8 rounded-full bg-blue-600 animate-bounce [animation-delay:.6s]"></div>
        <div className="w-8 h-8 rounded-full bg-blue-600 animate-bounce [animation-delay:.8s]"></div>
        <div className="w-8 h-8 rounded-full bg-blue-600 animate-bounce [animation-delay:1s]"></div>
      </div>
    </>
  );
};

export default Loader;
=======
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-row gap-2 h-fit ">
      <div className="w-8 h-8 rounded-full bg-red-600 animate-ping"></div>
      <div className="w-8 h-8 rounded-full bg-blue-600 animate-ping [animation-delay:-.3s]"></div>
      <div className="w-8 h-8 rounded-full bg-purple-600 animate-ping [animation-delay:-.6s]"></div>
      <div className="w-8 h-8 rounded-full bg-blue-600 animate-ping [animation-delay:-.9s]"></div>
      <div className="w-8 h-8 rounded-full bg-red-600 animate-ping [animation-delay:-1s]"></div>
    </div>
    // <div className="flex flex-row gap-2">
    //   <div className="w-8 h-15 bg-blue-700 animate-spin  [animation-delay:-0.0s]"></div>
    //   <div className="w-8 h-15  bg-blue-700 animate-spin [animation-delay:-0.3s]"></div>
    //   <div className="w-8 h-15  bg-blue-700 animate-spin [animation-delay:-0.5s]"></div>
    //   <div className="w-8 h-15 bg-blue-700 animate-spin [animation-delay:-0.7s]"></div>
    //   <div className="w-8 h-15  bg-blue-700 animate-spin [animation-delay:-0.9s]"></div>
    //   <div className="w-8 h-15  bg-blue-700 animate-spin [animation-delay:-1.1s]"></div>
    // </div>
  );
};

export default Loader;
>>>>>>> bec30cfea9a92640a262797ae437a618468dfd2e
