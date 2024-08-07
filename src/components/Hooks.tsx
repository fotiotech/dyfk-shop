import React, { ReactNode, useEffect, useRef } from "react";

const useClickOusite = (handler: () => void) => {
  let domNode = useRef(null);

  useEffect(() => {
    function Handler(e: { target: any; }) {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", Handler);

    return () => document.removeEventListener("mousedown", Handler);
  });

  return domNode;
};

export const useClickAndHide = (handler: () => void) => {
  let domNode = useRef();

  useEffect(() => {
    function Handler() {
      handler();
    }
    document.addEventListener("mousedown", Handler);

    return () => document.removeEventListener("mousedown", Handler);
  });

  return domNode;
};

export default useClickOusite;
