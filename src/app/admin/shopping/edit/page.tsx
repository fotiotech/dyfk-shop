"use client";

// import axios from "axios";
import React, { useState } from "react";

const EditPage = () => {
  const IdEdit = new URLSearchParams(location.search).get("id");
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("New product");
  const [promotion, setPromotion] = useState("");
  const [category, setCategory] = useState("");
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
      caracteristique === "" ||
      description === "" ||
      price === "" ||
      devise === "" ||
      files === null
    ) {
      alert("fill out all required cases");
    }

    const data = new FormData();
    data.append("editid", IdEdit);
    data.append("title", title);
    data.append("category", category);
    data.append("promotion", promotion);
    data.append("productName", productName);
    data.append("caracteristique", caracteristique);
    data.append("description", description);
    data.append("files", files);
    data.append("price", price);
    data.append("reduction", reduction);
    data.append("devise", devise);

    // try {
    //   await axios.put("http://localhost:3000/products/edit", data, {
    //     headers: { "Content-type": "multipart/form-data" },
    //   });
    //   alert("Edited successfully.");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  //   useEffect(() => {
  //     try {
  //       axios
  //         .get(`http://localhost:3000/products/edit/` + IdEdit)
  //         .then((response) => {
  //           setProducts(response.data);
  //         });
  //     } catch {
  //       (error: any) => {
  //         console.log(error);
  //       };
  //     }
  //   }, []);

  return (
    <div className=" bg-[#eee] text-pri border mb-10 ">
      <p className="text-xl font-bold p-2">EditPage</p>
      <div className="">
        {products.length > 0 ? (
          <div className=" p-2 border rounded-md">
            <div className="w-40 h-40 m-3 overflow-hidden ">
              <img
                title="image"
                src={products[0].images}
                className=" w-full h-full object-contain"
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
                  defaultValue={products[0].title}
                  onChange={(e) => setTitle(e.target.value)}
                  className=" w-[80%] h-12 rounded-xl border mx-3 px-3 bg-sec mb-2 font-medium"
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
                        defaultValue={products[0].promotion_title}
                        onChange={(e) => setPromotion(e.target.value)}
                        className="w-[80%] bg-sec h-12 rounded-xl border mx-3 px-3 mb-2 font-medium"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div>
              <label>
                <p className=" text-lg font-medium py-1">Category :</p>
                <select
                  name="Category"
                  defaultValue={products[0].category}
                  onChange={(e) => setCategory(e.target.value)}
                  className=" w-60 bg-sec border ml-2 p-1 px-2 mb-2 font-medium"
                >
                  <option value="All Category">Electronics</option>
                  <option value="Header">Clothes</option>
                  <option value="Best Deals">Health</option>
                  <option value="Construction">Construction</option>
                  <option value="Health & Beauty">Health & Beauty</option>
                  <option value="Meubles">Meubles</option>
                  <option value="interior design">interior design</option>
                </select>
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Product Name :</p>
                <input
                  title="name of product"
                  type="text"
                  defaultValue={products[0].name}
                  onChange={(e) => setProductName(e.target.value)}
                  className="border bg-sec ml-2 mb-2 p-1 px-2"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Caracteristique :</p>
                <input
                  title="name of product"
                  type="text"
                  defaultValue={products[0].caracteristique}
                  onChange={(e) => setCaracteristique(e.target.value)}
                  className="border bg-sec ml-2 mb-2 p-1 px-2"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Price :</p>
                <input
                  title="name of product"
                  type="number"
                  min="0"
                  step="0.01"
                  defaultValue={products[0].price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border bg-sec ml-2 mb-2 p-1 px-2"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Price Off :</p>
                <input
                  title="name of product"
                  type="number"
                  min="0"
                  step="0.01"
                  defaultValue={products[0].reduction}
                  onChange={(e) => setReduction(e.target.value)}
                  className="border bg-sec ml-2 mb-2 p-1 px-2"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1">Devise :</p>
                <select
                  name="devise"
                  defaultValue={products[0].devise}
                  onChange={(e) => setDevise(e.target.value)}
                  className="w-60 bg-sec border ml-2 p-1 px-2 mb-2"
                >
                  <option value="cfa">cfa</option>
                  <option value="xaf">xaf</option>
                  <option value="$">$</option>
                  <option value="euro">euro</option>
                </select>
              </label>
              <label>
                <p className=" text-lg font-medium py-1">
                  Product Description :
                </p>
                <input
                  title="name of product"
                  type="text"
                  defaultValue={products[0].description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border bg-sec ml-2 mb-2 p-1 px-2"
                />
              </label>
              <label>
                <p className=" text-lg font-medium py-1"> Image :</p>
                <input
                  title="name of product"
                  type="file"
                  accept=".png, .jpg, .jpeg, .webp, .mp4"
                  onChange={(e) => setFiles(e.target.files[0])}
                  className="border bg-sec ml-2 mb-2 p-1"
                />
              </label>

              <button
                type="submit"
                onClick={HandleData}
                className="border  block mx-5 p-2 rounded-full hover:bg-[#efefef]"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <p>hello</p>
        )}
      </div>
    </div>
  );
};

export default EditPage;
