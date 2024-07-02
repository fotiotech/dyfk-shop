import Link from "next/link";
import React from "react";

interface myCart {
  EditId: string | number;
}

const EditButton: React.FC<myCart> = ({ EditId }) => {
  return (
    <div className="right-[100px] absolute bg-fif w-[200px] border top-1 p-2  rounded-md">
      <div className=" bg-sec">
        <div className=" ">
          <Link href={`/admin/shopping/edit?id=${EditId}`}>
            <p className=" py-1 px-2 hover:bg-[#efefef]">Edit Post</p>
          </Link>
          <Link href={`/admin/shopping/delete?id=${EditId}`}>
            <p className=" py-1 px-2 hover:bg-[#efefef]">Delete</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditButton;
