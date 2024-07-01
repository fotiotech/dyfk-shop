"use client";

import React from "react";

const Page = ({
  params,
}: {
  params: { overview: string; shopping: string };
}) => {
  return (
    <div>
      Page<div>{params.shopping}</div>
    </div>
  );
};

export default Page;
