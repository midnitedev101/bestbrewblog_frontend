import path from "path"
import { createFilePath } from "gatsby-source-filesystem"

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const pageResults = await graphql(`
        query allPages {
            allWpPage {
                edges {
                    node {
                        id
                        title
                        slug
                        content
                    }
                }
            }
        } 
    `)
    
    if (pageResults.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query for pages.`)
        return
    }

    // Create pages from Wordpress source
    pageResults.data.allWpPage.edges.forEach(nodeItem => {
        createPage({
            path: `/${nodeItem.node.slug}/`,
            component: path.resolve(`./src/templates/page-layout.tsx`),
            context: {
                id: nodeItem.node.id,
            }
        })
    })
      
    const postResults = await graphql(`
        query allPosts {
            allWpPost {
                edges {
                    node {
                        id
                        slug
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    `)

    if (postResults.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query for posts.`)
        return
    }

    // Create posts list page from Wordpress source
    const postList = postResults.data.allWpPost.edges
    const postsPerPage = 9
    const numPages = Math.ceil(postList.length / postsPerPage)
    postResults.data.allWpPost.edges.forEach((nodeItem, i) => {
        createPage({
            path: i === 0 ? `/posts` : `/posts/${i + 1}`,
            component: path.resolve(`./src/templates/posts-layout.tsx`),
            context: {
                id: nodeItem.node.id,
                skip: i * postsPerPage,
                limit: postsPerPage,
                numPages: numPages,
                currentPage: i + 1,
            }
        })
    })

    const singlePostResults = await graphql(`
        query singlePost {
            allWpPost {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        } 
    `)
    
    if (singlePostResults.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query for single post.`)
        return
    }

    // Create single post
    singlePostResults.data.allWpPost.edges.forEach(nodeItem => {
        createPage({
            path: `/post/${nodeItem.node.slug}/`,
            component: path.resolve(`./src/templates/single-post-layout.tsx`),
            context: {
                id: nodeItem.node.id,
            }
        })
    })

    const searchResults = await graphql(`
        query SearchSite { # GraphQL query names must not have duplicates (e.g. query SearchPosts on one file, query SearchPosts on another)
            allWpPost {
                edges {
                    node {
                        id
                        slug
                        title
                        link
                        excerpt
                        content
                        date(formatString: "MMMM DD, YYYY")
                        author {
                            node {
                                name
                            }
                        }
                        featuredImage {
                            node {
                                mediaItemUrl
                                altText
                            }
                        }
                    }
                }
            }
        }
    `)

    if (searchResults.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query for search results.`)
        return
    }

    // Create search page
    createPage({
        // path: i === 0 ? `/search` : `/search/${i + 1}`,
        path: `/search`,
        component: path.resolve(`./src/templates/search-layout.tsx`),
        context: {
            content: searchResults.data.allWpPost.edges,
        }
    })
}
  