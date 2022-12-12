import React, {useState} from "react"
import { graphql, Link } from 'gatsby'   // imports that allow graphql to query wordpress backend content
import type { PageProps } from "gatsby"
import parse from 'html-react-parser'  // allows parsing html content into plain text string
import Header from "../components/Header/header"
import { PostsContainer, Post } from '../components/Posts/posts.styles'
// import retrieveExcerptFirstSentence from '../hooks/retrieveExcerptFirstSentence'
import { StaticImage } from "gatsby-plugin-image"
import { Page } from "../pages/general.styles"
import styled from 'styled-components'

const Pagination = styled.div`
    &.prev {
        float: left;
    }
    a.next {
        float: right;
    }
`

const PostsTemplate: React.FC<PageProps> = (props) => {

    const posts = props.data.allWpPost
    // console.log(JSON.stringify(posts.nodes))
    // posts.nodes.map((postItem, i) =>
    //     console.log(JSON.stringify(postItem))
    // )
    // console.log(JSON.stringify(props))
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/posts" : "/posts/" + (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    const [contentActive, setContentActive] = useState("false");
  
    const contentToggle = () => { // function toggles state whether main content is visible/header is invisible or main content is invisible/header is visible
        setContentActive(!contentActive);
    };

    return (
        <>
            <Header contentToggle={contentToggle} contentActive={contentActive} />  {/* Passes contentToggle function for header button and contentActive status for header component evaluation */}
            <Page className={!contentActive ? "" : "active"}> {/* If header has active class name, main content class removes active from class list, vice versa */}
                <PostsContainer>
                    {posts.nodes.map((postItem, i) =>
                        <Post key={"post_"+i}>
                            <a href={"/post"+postItem.link} rel="noopener noreferrer">
                                {postItem.featuredImage ? <img src={postItem.featuredImage.node.mediaItemUrl} alt={postItem.featuredImage.node.altText} /> : <StaticImage src="../images/banner_2.webp" alt="img_placeholder" />}
                                <div className="postText">
                                    <h3>{postItem.title}</h3>
                                    <label>by {postItem.author.node.name}</label>
                                    {/* <p>{postItem.excerpt ? retrieveExcerptFirstSentence(parse(postItem.excerpt)): ""}</p> */}
                                    <p>{postItem.excerpt ? parse(postItem.excerpt) : ""}</p>
                                </div>
                            </a>
                        </Post>
                    )}
                </PostsContainer>

                <Pagination>
                    {!isFirst && (
                        <Link to={prevPage} rel="prev" className="nav prev">
                        ← Previous Page
                        </Link>
                    )}
                    {!isLast && (
                        <Link to={nextPage} rel="next" className="nav next">
                        Next Page →
                        </Link>
                    )}
                </Pagination>
            </Page>
        </>
    )
}

export default PostsTemplate

export const postsQuery = graphql`
    query currentPostsQuery($limit: Int, $skip: Int) {
        allWpPost(
            limit: $limit
            skip: $skip
            sort: {date: DESC}
        ) {
            nodes {
                id
                slug
                title
                content
                excerpt
                link
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
`