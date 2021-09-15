// fs dependency is a Node.js library for working with the filesystem.
const fs = require("fs"); // eslint-disable-line @typescript-eslint/no-var-requires

// Use the onPostBuild Node API, which runs after the build has been completed.
// Note that we have to use an async function here because the Remark plugin
// writes the html property asynchronously.
exports.onPostBuild = async ({ graphql }) => {
  // Run the GraphQL query (from example above).
  await graphql(`
    {
      latestNotice: allMdx(
        filter: {
          slug: { glob: "notices/*" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___createdAt, order: DESC }
        limit: 1
      ) {
        edges {
          node {
            id
            frontmatter {
              createdAt
            }
          }
        }
      }
      popups: allMdx(
        filter: {
          slug: { glob: "notices/*" }
          frontmatter: { popupVersionPattern: { ne: null } }
        }
        sort: { fields: frontmatter___createdAt, order: DESC }
      ) {
        edges {
          node {
            slug
            frontmatter {
              title
              popupVersionPattern
            }
          }
        }
      }
    }
  `).then(async (result) => {
    // A reference to where we are going to put the files. Note that the public
    // directory already exists because the build has been completed (since
    // we're in the onPostBuild hook).
    const targetPath = "./public";

    // Collect the data for all earworms. This simply digs into the query result
    // and extracts the objects we care about.
    const latestNoticeEdges = result.data.latestNotice.edges;
    const latestNoticeCreatedAt =
      latestNoticeEdges.length > 0
        ? latestNoticeEdges[0].node.frontmatter.createdAt
        : null;
    const popups = result.data.popups.edges.map((edge) => edge.node);

    // If we don't already have the posts directory inside the public directory,
    // create it.
    if (!fs.existsSync(targetPath)) fs.mkdirSync(targetPath);

    fs.writeFileSync(
      `${targetPath}/status.json`,
      JSON.stringify({
        1: {
          latestNoticeCreatedAt: latestNoticeCreatedAt,
          popups: popups.map((node) => ({
            location: `/${node.slug}`,
            title: node.frontmatter.title,
            popupVersionPattern: node.frontmatter.popupVersionPattern,
          })),
        },
      })
    );
  });
};
