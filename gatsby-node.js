const path = require("path")
const Promise = require("bluebird")
const { create } = require("domain")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const creatorTemplate = path.resolve("./src/templates/creator-template.js")
    resolve(
      graphql(`
        {
          allContentfulCreator {
            edges {
              node {
                slug
                name
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const creators = result.data.allContentfulCreator.edges
        creators.forEach(creator => {
          createPage({
            path: `/creators/${creator.slug}`,
            component: creatorTemplate,
            context: {
              slug: creator.node.slug,
            },
          })
        })
      })
    )
  })
}
