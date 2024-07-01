"use client";

import AdminSideBar from "@/components/admin-components/AdminSideBar";
import useClickOusite from "@/components/Hooks";
import React, { useState } from "react";

const Page = () => {
  const [showComponent, setShowComponent] = useState(false);

  let domNode = useClickOusite(() => {
    setShowComponent(false);
  });
  return (
    <div className="">
      <div className="flex border-b ">
        <div>
          <button
            type="button"
            title="menu"
            onClick={() => {
              setShowComponent((showComponent) => !showComponent);
            }}
            className="p-2 font-bold "
          >
            Menu
          </button>
        </div>
        <div>
          <p className="font-bold text-2xl p-2">DyfkShop</p>
        </div>
      </div>
      <div className=" ">
        <div ref={domNode} className="relative ">
          {showComponent && <AdminSideBar />}
        </div>
        <div className="bg-[#eee] w-full h-screen overflow-hidden">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
