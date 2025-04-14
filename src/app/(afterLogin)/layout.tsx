import React, { PropsWithChildren } from "react";

const AfterLoginLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>애프터 로그인 레이아웃{children}</div>;
};

export default AfterLoginLayout;
