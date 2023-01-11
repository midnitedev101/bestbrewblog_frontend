import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import Posts from "../components/Posts/posts"
import { HomeHero } from "../scripts/tsx/homepage.styles"

/*** Source: https://www.gatsbyjs.com/plugins/gatsby-theme-wordpress-gutenberg/ ***/
/*** Notes: We're using Gutenberg so we need the block styles
these are copied into this project due to a conflict in the postCSS
version used by the Gatsby and @wordpress packages that causes build
failures.
@todo update this once @wordpress upgrades their postcss version 
Code added found on scripts/css/@wordpress, scripts/css/normalize.css, scripts/css/style.css ***/
import "../scripts/css/@wordpress/block-library/build-style/style.css"
import "../scripts/css/@wordpress/block-library/build-style/theme.css"

import "../scripts/scss/styles.scss"
import { Page } from "../scripts/tsx/general.styles"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}
const spacerStyle = {
  padding: `50vh 0`,
  position: `static`,
  display: `block`,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  const [contentActive, setContentActive] = useState("false");
  
  const contentToggle = () => { // function toggles state whether main content is visible/header is invisible or main content is invisible/header is visible
    setContentActive(!contentActive);
  };
  return (
    <>
      <Header contentToggle={contentToggle} contentActive={contentActive} />  {/* Passes contentToggle function for header button and contentActive status for header component evaluation */}
      <Page className={!contentActive ? "" : "active"}> {/* If header has active class name, main content class removes active from class list, vice versa */}
        {/* <h1 style={headingStyles}>
          Congratulations
          <br />
          <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
        </h1>
        <p style={paragraphStyles}>
          Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this page
          update in real-time. 😎
        </p>
        <ul style={doclistStyles}>
          {docLinks.map(doc => (
            <li key={doc.url} style={docLinkStyle}>
              <a
                style={linkStyle}
                href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
              >
                {doc.text}
              </a>
            </li>
          ))}
        </ul> */}
        {/* <ul style={listStyles}>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                >
                  {link.text}
                </a>
                {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul> */}
        {/* <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        /> */}
        <HomeHero>
          <div className="heroWrapper">
            <div className="heroOverlay">
              <h1>Hi World!</h1>
              <h3>This is the Best Brew Blog.<br/> A personalized compendium of content for those who enjoy, fantasize and sexualize anything regarding the most popular drink in the world: coffee (tea and water don't count).</h3>
            </div>
          </div>
        </HomeHero>
        <span style={spacerStyle}></span>
        <h2>Most Recent Posts:</h2>
        <Posts />
      </Page>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
