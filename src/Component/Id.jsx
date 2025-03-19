import React from "react";

const Id = () => {
  return (
    <div className="flex items-center gap-[10px] mt-5">
      <div className="document red-hat">
        <p className="text-base font-bold">Documents</p>
        <div className="flex flex-col gap-[10px]">
          <p className="font-semibold">Front</p>
          <img src="front.png" width={319} height={153} alt="front" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="font-semibold">Back</p>
          <img src="back.png" width={319} height={153} alt="back" />
        </div>
      </div>
    </div>
  );
};

export default Id;
