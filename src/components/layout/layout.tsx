import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import React from "react";

import "./layout.scss";

const Layout = ({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactElement => (
  <MDXProvider components={{ Link }}>
    <div className="wrapper">
      <main>{children}</main>

      <footer>
        <p>ⓒ heek.kr</p>
      </footer>
    </div>
  </MDXProvider>
);

export default Layout;
