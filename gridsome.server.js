// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      piece:allContentfulPiece {
        edges {
          node {
            id
            name
            slug

          }
        }
      }
    }`)

    data.piece.edges.forEach(({ node }) => {
      createPage({
        path: `/piece/${node.slug}`,
        component: './src/templates/Piece.vue',
        context: {
          id: node.id
        }
      })
    })

  })
}
