import React from "react";
import Layout from "../components/layout";

const NotFoundPage = (): React.ReactElement => {
  return (
    <Layout>
      <title>HeekTime : Not found</title>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
    </Layout>
  );
};

export default NotFoundPage;
