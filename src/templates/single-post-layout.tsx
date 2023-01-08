import React, {useState} from "react"
import { graphql } from 'gatsby'   // imports that allow graphql to query wordpress backend content
import type { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header/header"
import parse from 'html-react-parser'  // allows parsing html content into plain text string
import { SinglePost } from "../pages/general.styles"
// import WPGBlocks from 'react-gutenberg'
// import { IWPGBlock } from 'react-gutenberg/src/types'


// interface IPost {
//     wordpress_id: number
//     id: number
//     title: string
//     blocks: IWPGBlock[]
//   }

const SinglePostTemplate: React.FC<PageProps> = (props) => {

        const currentPost = props.data.allWpPost.nodes[0]

        const [contentActive, setContentActive] = useState("false");
  
        const contentToggle = () => { // function toggles state whether main content is visible/header is invisible or main content is invisible/header is visible
            setContentActive(!contentActive);
        };

        return (
            <>
            <Header contentToggle={contentToggle} contentActive={contentActive} />  {/* Passes contentToggle function for header button and contentActive status for header component evaluation */}
                <SinglePost className={!contentActive ? "" : "active"}> {/* If header has active class name, main content class removes active from class list, vice versa */}
                    {currentPost.featuredImage ? <img src={currentPost.featuredImage.node.mediaItemUrl} alt={currentPost.featuredImage.node.altText} className="post-banner-img" /> : <StaticImage src="../images/banner_2.webp" alt="img_placeholder" imgClassName="post-banner-img static" />}
                    <h1 className="postTitle">{parse(currentPost.title)}<span className="postAuthor"> by {(currentPost.author.node.name)} on {(currentPost.date)}</span></h1>
                    <div className="postContent">{currentPost.content? parse(currentPost.content) : ""}</div>
                </SinglePost>
            </>
        )
}

export default SinglePostTemplate

export const postQuery = graphql`
    query currentPost($id: String!) {
        allWpPost(filter: {id: {eq: $id}}) {
            nodes {
                id
                slug
                title
                author {
                    node {
                        id
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
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`