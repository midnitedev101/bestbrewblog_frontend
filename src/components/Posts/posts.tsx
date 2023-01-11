import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'   // imports that allow graphql to query wordpress backend content
import parse from 'html-react-parser'  // allows parsing html content into plain text string
import { PostsContainer, Post } from './posts.styles'
// import retrieveExcerptFirstSentence from '../../hooks/retrieveExcerptFirstSentence'
import getReadingTime from '../../hooks/getReadingTime'
import { StaticImage } from "gatsby-plugin-image"

export default function Posts() {
    const data = useStaticQuery(graphql`
        query PostsQuery {
            posts: allWpPost(limit: 6) {
                edges {
                node {
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
                    content
                    excerpt
                    date(formatString: "MMMM DD, YYYY")
                    title
                    link
                    slug
                    }
                }
            }

            pages: allWpPage {
                edges {
                    node {
                    id
                    slug
                    }
                }
            }

            images: allImageSharp {
                nodes {
                    gatsbyImageData
                }
            }
            
        }
    `)

    // data.posts.edges.map((postItem, i) =>
    //     console.log(JSON.stringify(postItem.node))
    // )


    // console.log(JSON.stringify(data.posts))

    // console.log(JSON.stringify(data.pages))
    // console.log(JSON.stringify(data.pages.edges))
    // data.pages.edges.forEach(nodeItem => {
    //     console.log(nodeItem.node.slug)
    // })

    return (
        <PostsContainer>
            {data.posts.edges.map((postItem, i) =>
                <Post key={"post_"+i}>
                    <a href={"/post"+postItem.node.link} rel="noopener noreferrer">
                        {postItem.node.featuredImage ? <img src={postItem.node.featuredImage.node.mediaItemUrl} alt={postItem.node.featuredImage.node.altText} /> : <StaticImage src="../../images/banner_2.webp" alt="img_placeholder" />}
                        <div className="postText">
                            <h3>{postItem.node.title}</h3>
                            {/* <label>by {postItem.node.author.node.name}</label> */}
                            {/* <span className="postSpan">{retrieveExcerptFirstSentence(parse(postItem.node.excerpt))}</span> */}
                            <div className="somePostDetails">
                                <span className="postDate">{postItem.node.date}</span>
                                <span className="postWordCnt">{getReadingTime(parse(postItem.node.content))}</span>
                            </div>
                            <span className="postSpan">{parse(postItem.node.excerpt)}</span>
                        </div>
                    </a>
                </Post>
            )}

            {/* {data.pages.edges.map((pageItem, i) =>
                console.log(pageItem.node.slug)
            )} */}
        </PostsContainer>
    )
}
