import React from "react";
import "./layout.scss";

const Layout = ({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactElement => (
  <div className="wrapper">
    <main>{children}</main>

    <footer>
      <p>ⓒ heek.kr</p>
    </footer>
  </div>
);

export default Layout;
