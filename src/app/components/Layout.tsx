import React, { FC } from "react";
import Header from "./Header";

interface HeaderProps {
  children?: React.ReactNode;
}

const Layout: FC<HeaderProps> = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
