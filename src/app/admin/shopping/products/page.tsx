"use client";

import EditButton from "@/components/admin-components/EditButton";
import useClickOusite from "@/components/Hooks";
import { MoreHorizRounded } from "@mui/icons-material";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productid, setProductsid] = useState(0);
  var [showComponent, setShowComponent] = useState(false);

  let domNode = useClickOusite(() => {
    setShowComponent(false);
  });

  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/api/shopping`).then((response) => {
        setProducts(response.data);
      });
    } catch {
      (error: any) => {
        console.log(error);
      };
    }
  }, []);

  return (
    <div className=" lg:p-5 p-2">
      <div className="  ">
        <div className=" relative pt-5 grid grid-cols-2 mx-0 gap-3">
          <div className="">
            <div ref={domNode}>
              {showComponent && <EditButton EditId={productid} />}
            </div>
          </div>
          {products
            ? products.map((data, index) => (
                <div key={index} className="border dark:bg-fif rounded-md p-2">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      title="Edit"
                      onClick={() => {
                        setProductsid(data.product_id);
                        setShowComponent((showComponent) => !showComponent);
                      }}
                    >
                      <MoreHorizRounded />
                    </button>
                  </div>
                  <div className=" h-40 overflow-hidden ">
                    <Image
                      alt="image"
                      width={500}
                      height={300}
                      title="image"
                      src={data.images}
                      className=" w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="line-clamp-2">{data.name}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
