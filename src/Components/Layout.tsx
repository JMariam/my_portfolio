import React from "react";
import MouseEffect from "./MouseEffect";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <MouseEffect />
      {children}
    </div>
  );
};

export default Layout;
