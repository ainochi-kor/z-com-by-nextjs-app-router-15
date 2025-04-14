import React, { PropsWithChildren } from "react";

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>HomeLayout{children}</div>;
};

export default HomeLayout;
