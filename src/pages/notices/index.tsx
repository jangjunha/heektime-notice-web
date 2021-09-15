import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = (): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query NoticesQuery {
      notices: allMdx(
        filter: {
          slug: { glob: "notices/*" }
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
    <main>
      <title>HeekTime Notice</title>
      <h1>HeekTime Notice</h1>
      <ul>
        {data.notices.edges
          .map((edge: any) => edge.node)
          .map((node: any) => (
            <li key={node.id}>
              <a href={`/${node.slug}`}>
                <p>{node.frontmatter?.title}</p>
                <p>{node.frontmatter?.createdAt}</p>
              </a>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default IndexPage;
