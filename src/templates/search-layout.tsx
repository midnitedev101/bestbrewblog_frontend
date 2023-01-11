import React, {useState} from "react"
import { graphql } from 'gatsby'   // imports that allow graphql to query wordpress backend content
import type { PageProps } from "gatsby"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import parse from 'html-react-parser'  // allows parsing html content into plain text string
import { Page } from "../scripts/tsx/general.styles"
import { PostsContainer, Post } from '../components/Posts/posts.styles'
// import retrieveExcerptFirstSentence from '../hooks/retrieveExcerptFirstSentence'
import getReadingTime from '../hooks/getReadingTime'
import { StaticImage } from "gatsby-plugin-image"

const SearchTemplate: React.FC<PageProps> = (props) => {

    const [contentActive, setContentActive] = useState("false");

    const contentToggle = () => { // function toggles state whether main content is visible/header is invisible or main content is invisible/header is visible
        setContentActive(!contentActive)
    }

    // const searchValRegExp = props.location !== null ? new RegExp(props.location.state.searchValue, 'i') : ""   // Convert search value as part of a regular expression
    const searchValRegExp = new RegExp(props.location?.state?.searchValue, 'i')   // Convert search value as part of a regular expression
    // console.log(props.location);
    // const searchValRegExp = props.location ? new RegExp(props.location.state.searchValue, 'i') : null   // Convert search value as part of a regular expression
    // console.log(props.pageContext.content[0].node.title)
    // console.log(searchValRegExp)
    // console.log(searchValRegExp.ignoreCase)
    // console.log(searchValRegExp.test(props.pageContext.content[0].node.title))
    const filteredPosts = props.pageContext.content.filter((postItem, i) =>
        searchValRegExp.test(postItem.node.title) == true // Test search value with the posts retrieved from the create page results to see if it matches
    )
    // console.log(props.location.state.searchValue)
    // console.log(filteredPosts)

    // console.log(props);

    return (
        <>
            <Header contentToggle={contentToggle} contentActive={contentActive} />  {/* Passes contentToggle function for header button and contentActive status for header component evaluation */}
                <Page className={!contentActive ? "" : "active"}>   {/* If header has active class name, main content class removes active from class list, vice versa */}
                    <h3>Search Results:</h3>
                    <PostsContainer>
                        {filteredPosts.map((postItem, i) =>
                            <Post key={"post_"+i}>
                                <a href={"/post"+postItem.node.link} rel="noopener noreferrer">
                                    {postItem.node.featuredImage ? <img src={postItem.node.featuredImage.node.mediaItemUrl} alt={postItem.node.featuredImage.node.altText} /> : <StaticImage src="../images/banner_2.webp" alt="img_placeholder" />}
                                    <div className="postText">
                                        <h3>{postItem.node.title}</h3>
                                        <label>by {postItem.node.author.node.name}</label>
                                        <div className="somePostDetails">
                                            <span className="postDate">{postItem.node.date}</span>
                                            <span className="postWordCnt">{getReadingTime(parse(postItem.node.content))}</span>
                                        </div>
                                        <span>{postItem.node.excerpt ? parse(postItem.node.excerpt) : ""}</span>
                                    </div>
                                </a>     
                            </Post>
                        )}
                        
                    </PostsContainer>
                </Page>
            <Footer />
        </>
    )
}

export default SearchTemplate

// export const postQuery = graphql`
// query currentPostQuery($id: String!) {
//     allWpPost(filter: {id: {eq: $id}}) {
//         nodes {
//             id
//             slug
//             title
//             author {
//                 node {
//                     id
//                 }
//             }
//             content
//             date(formatString: "MMMM DD, YYYY")
//         }
//     }
// }
// `