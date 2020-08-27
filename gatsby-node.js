const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allContentfulCreator {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `);
  data.allContentfulCreator.edges.forEach(item => {
    createPage({
      path: `/creators/${item.node.slug}`,
      component: path.resolve(`./src/templates/creator-template.js`),
      context: {
        slug: item.node.slug,
      },
    });
  });
};