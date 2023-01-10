import React, {Component, useState} from "react"
import { useStaticQuery, graphql, HeadFC, PageProps } from 'gatsby'   // imports that allow graphql to query wordpress backend content
import Header from "../components/Header/header"
import { Page } from "../scripts/tsx/general.styles"
import parse from 'html-react-parser'  // allows parsing html content into plain text string


const PageTemplate: React.FC<PageProps> = (props) => {

        const currentPage = props.data.allWpPage.nodes[0]
        const [contentActive, setContentActive] = useState("false");
        const contentToggle = () => { // function toggles state whether main content is visible/header is invisible or main content is invisible/header is visible
            setContentActive(!contentActive);
        };
        console.log(props.location.key);

        return (
            <>
            <Header contentToggle={contentToggle} contentActive={contentActive} />  {/* Passes contentToggle function for header button and contentActive status for header component evaluation */}
                <Page className={!contentActive ? "" : "active"}> {/* If header has active class name, main content class removes active from class list, vice versa */}
                    <h1 className="pageTitle">{currentPage.title ? parse(currentPage.title) : ""}</h1>
                    {currentPage.content ? parse(currentPage.content) : ""}
                    {/* <div dangerouslySetInnerHTML={{ __html: currentPage.content }} /> */}
                </Page>
            </>
        )
    // }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPage($id: String!) {
        allWpPage(filter: {id: {eq: $id}}) {
            nodes {
                id
                slug
                title
                content
                date(formatString: "MMMM DD, YYYY")
            }
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`