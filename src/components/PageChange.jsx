import React from "react";

function PageChange({prevHandeler,nextHandeler,pagecount}) {
  return (
    <div className="flex flex-row justify-between m-[1rem]">
      <button
        className="border-2 border-solid p-[0.5rem] rounded-2xl text-3xl"
        onClick={() => {prevHandeler()}}
      >
        prev
      </button>
      <p className="mt-4 text-2xl">{pagecount}</p>
      <button
        className="border-2 border-solid p-[0.5rem] rounded-2xl text-3xl"
        onClick={() =>{nextHandeler()}}
      >
        next
      </button>
    </div>
  );
}

export default PageChange;
