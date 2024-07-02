"use client";

import axios from "axios";
import React, { useState } from "react";

const AddNew = () => {
  const [title, setTitle] = useState("New product");
  const [category, setCategory] = useState("");
  const [promotion, setPromotion] = useState("");
  const [productName, setProductName] = useState("");
  const [caracteristique, setCaracteristique] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [price, setPrice] = useState(null);
  const [reduction, setReduction] = useState(null);
  const [devise, setDevise] = useState("");

  async function HandleData(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    if (
      productName === "" ||
      description === "" ||
      price === null ||
      files === null
    ) {
      alert("fill out all required cases");
    }

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("files", files[i]);
    }
    data.append("title", title);
    data.append("category", category);
    data.append("promotion", promotion);
    data.append("productName", productName);
    data.append("caracteristique", caracteristique);
    data.append("description", description);
    data.append("price", price);
    data.append("reduction", reduction);
    data.append("devise", devise);

        try {
          await axios.post("http://localhost:3000/api/shopping/new", data, {
            headers: { "Content-type": "multipart/form-data" },
          });
          alert("Registration successful.");
        } catch (error) {
          alert("Failed to add products!");
          console.log(error);
        }
  }
  return (
    <div className="w-full mb-10">
      <div className=" py-2">
        <div className="flex justify-between bg-pri border-b-2">
          <h2 className=" text-2xl p-2 font-bold">New Product</h2>
          <div>
            <button
              type="submit"
              onClick={HandleData}
              className="border-2 border-thiR block font-medium mx-3 p-2 px-4
               hover:bg-[#efefef] rounded-full"
            >
              Add
            </button>
          </div>
        </div>
        <div className="p-2 bg-[#eee]">
          <div
            className=" w-full h-screen
           overflow-auto scrollbar-none"
          >
            <div className="p-2 border bg-white rounded-xl mb-2 ">
              <h2 className="font-semibold text-xl m-2 ">Basic Information</h2>

              <div className="flex-col justify-between items-center">
                <div className="w-full p-2 border rounded-xl mb-2">
                  <label
                    htmlFor="images"
                    className=" text-lg font-medium my-2 block"
                  >
                    Image :
                  </label>

                  <input
                    title="name of product"
                    type="file"
                    multiple
                    accept=".png, .jpg, .jpeg, .webp, .mp4"
                    onChange={(e) => setFiles(e.target.files[0])}
                    className="w-[90%] bg-[#eee] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                  />
                </div>
                <div className="w-full border mb-2 rounded-xl">
                  <div className="px-2">
                    <label
                      htmlFor="images"
                      className=" text-lg font-medium my-2 block"
                    >
                      Title :
                    </label>

                    <select
                      title="title"
                      name="title"
                      typeof="text"
                      defaultValue={"New product"}
                      onChange={(e) => setTitle(e.target.value)}
                      className=" w-[90%] bg-[#eee] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                    >
                      <option value="New product">New product</option>
                      <option value="Ads">Ads</option>
                      <option value="Promotion">Promotion</option>
                      <option value="Discount">Discount</option>
                      <option value="sold">sold</option>
                    </select>
                    <div>
                      {title !== "New product" ? (
                        <div className="px-2">
                          <label
                            htmlFor="title"
                            className=" text-lg font-medium my-2 block"
                          >
                            {title} Title :
                          </label>
                          <input
                            title="Promotion title"
                            type="text"
                            onChange={(e) => setPromotion(e.target.value)}
                            className="w-[90%] bg-[#eee] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="w-full border rounded-xl">
                  <div className="px-2">
                    <label
                      htmlFor="Category"
                      className=" text-lg font-medium my-2 block"
                    >
                      Category :
                    </label>

                    <select
                      title="image"
                      name="Category"
                      typeof="text"
                      defaultValue={"Electronics"}
                      onChange={(e) => setCategory(e.target.value)}
                      className=" w-[90%] bg-[#eee] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                    >
                      <option value="Electronics">Electronics</option>
                      <option value="Clothes">Clothes</option>
                      <option value="Health">Health</option>
                      <option value="Construction">Construction</option>
                      <option value="Construction">Health & Beauty</option>
                      <option value="Meubles">Meubles</option>
                      <option value="interior design">interior design</option>
                    </select>
                  </div>
                  <div className="p-2">
                    <label
                      htmlFor="images"
                      className=" text-lg font-medium my-2 block"
                    >
                      Product Name :
                    </label>
                    <input
                      title="name of product"
                      type="text"
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-[90%] bg-[#eee] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 border bg-white rounded-xl ">
              <h2 className="font-semibold text-xl m-2 ">Caracteristique</h2>
              <div className="flex-col justify-between items-center">
                <div className="w-full border rounded-xl mb-2">
                  <div className="px-2">
                    <label
                      htmlFor="images"
                      className=" text-lg font-medium my-2 block"
                    >
                      Specification :
                    </label>
                    <input
                      title="specification"
                      type="text"
                      onChange={(e) => setCaracteristique(e.target.value)}
                      className="w-[90%] bg-[#eee] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                    />
                  </div>
                  <div className="p-2">
                    <label
                      htmlFor="images"
                      className=" text-lg font-medium my-2 block"
                    >
                      Price :
                    </label>

                    <input
                      title="price"
                      type="number"
                      min="0"
                      step="0.01"
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-[90%] bg-[#eee] h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                    />
                  </div>
                </div>
                <div className="w-full  p-2 border rounded-xl mb-2">
                  <label
                    htmlFor="images"
                    className=" text-lg font-medium my-2 block"
                  >
                    Product Description :
                  </label>
                  <p className=" text-lg font-medium my-2"></p>
                  <textarea
                    title="description"
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-[90%] bg-[#eee] h-44 rounded-xl border mx-3 p-3 mb-2 font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl">
              <div>
                <label
                  htmlFor="images"
                  className=" text-lg font-medium my-2 block"
                >
                  Discount :
                </label>

                <input
                  title="discount"
                  type="number"
                  min="0"
                  step="0.01"
                  onChange={(e) => setReduction(e.target.value)}
                  className="border bg-[#eee] ml-2 p-1 px-2 mb-2"
                />
              </div>
              <div>
                <label
                  htmlFor="images"
                  className=" text-lg font-medium my-2 block"
                >
                  Devise :
                </label>
                <p className=" text-lg font-medium my-2"></p>

                <select
                  title="Devise"
                  name="devise"
                  typeof="text"
                  defaultValue={"cfa"}
                  onChange={(e) => setDevise(e.target.value)}
                  className="w-60 bg-[#eee] border ml-2 p-1 px-2 mb-2"
                >
                  <option value="cfa">cfa</option>
                  <option value="xaf">xaf</option>
                  <option value="$">$</option>
                  <option value="euro">euro</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              onClick={HandleData}
              className="border-2 border-thiR m-2 block bg-pri font-medium mx-3 p-2 hover:bg-[#efefef] rounded-full"
            >
              Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
