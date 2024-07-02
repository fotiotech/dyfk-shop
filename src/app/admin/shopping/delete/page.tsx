"use client";

// import axios from "axios";
import React from "react";

const DeletePage = () => {
  const IdEdit = new URLSearchParams(location.search).get("id");

  async function HandleData(ev: { preventDefault: () => void }) {
    ev.preventDefault();

    // try {
    //   await axios.delete("http://localhost:3000/products/delete/" + IdEdit);
    //   alert("Deleted successfully.");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className="absolute top-0 left-0 w-[700px] bg-white border">
      <p>DeletePage</p>
      <p className="p-2">Are you sure that you want to delete this product?</p>

      <button type="button" onClick={HandleData} className="p-2 border m-2">
        Yes, i want to delete.
      </button>

      <button type="button" className="p-2 border m-2">
        No, i don't want to delete.
      </button>
    </div>
  );
};

export default DeletePage;
