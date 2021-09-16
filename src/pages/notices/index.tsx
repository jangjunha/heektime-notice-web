import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "./../../components/layout";
import "./index.scss";

const IndexPage = (): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query NoticesQuery {
      notices: allMdx(
        filter: {
          slug: { glob: "notices/**/*" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___createdAt, order: DESC }
      ) {
        edges {
          node {
            id
            slug
            frontmatter {
              title
              createdAt
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <title>HeekTime 공지사항</title>
      <h1>HeekTime 공지사항</h1>
      <ul className="notice-list">
        {data.notices.edges
          .map((edge: any) => edge.node)
          .map((node: any) => (
            <li key={node.id}>
              <a href={`/${node.slug}`}>
                <p className="notice-title">{node.frontmatter.title}</p>
                <p className="notice-description">
                  {new Date(node.frontmatter.createdAt).toLocaleDateString()}
                </p>
              </a>
            </li>
          ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
