import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';   // imports that allow graphql to query wordpress backend content
import { FooterMenu, FooterMenuItems, FooterSearch } from './footer.styles';
import Search from '../Search/search';
import { Search as SearchIcon } from "@styled-icons/bootstrap/Search"
import bbb_text from "../../images/bestbrewblog_orig_text.webp";
import styled from 'styled-components';

export const SearchIconContainer = styled(SearchIcon)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0.25rem;
    vertical-align: baseline;
`

export default function Footer(props) {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
        site {
            siteMetadata {
            title
            }
        }
        menu: wpMenu(name: { eq: "Header Menu" }) {
                menuItems {
                    nodes {
                        label
                        url
                        parentId
                        id
                        childItems {
                            nodes {
                                label
                                url
                                id
                            }
                        }
                    }
                }
            }
        }
    `)

    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (event) => { // function to retrieve typed value on search field
        setSearchValue(event.target.value)
    };

    const clearSearch = () => { // function to clear search field
        setSearchValue('')
    }

    return (
        <footer>
            <div className="headerWrap">
                <FooterMenu>    
                    <nav className="nav">
                        <a href={"/"} rel="noopener noreferrer" className="logoContainer" onClick={props.contentToggle}>
                            <img
                                alt="BestBrewBlog Logo"
                                src={bbb_text}
                                className="bbb_text"
                                width='150' height='35' 
                                style={{
                                    position: "relative",
                                    margin: "1rem auto",
                                }}
                            />
                        </a>
                        <FooterMenuItems>
                            <li key="menuItem_posts"><a href="/posts" rel="noopener noreferrer" onClick={props.contentToggle}>Posts</a></li>
                            {data.menu.menuItems.nodes.map((node, i) =>
                                <li key={"menuItem_"+i}><a href={node.url} rel="noopener noreferrer" onClick={props.contentToggle}>{node.label}</a></li>
                            )}
                            <div className="footer_search">
                                <FooterSearch searchValue={searchValue} handleSearch={handleSearch} clearSearch={clearSearch}>
                                    <div className="searchInput">
                                        <input type="text" placeholder="Search posts" onChange={handleSearch} value={searchValue} />
                                        <Link to={"/search"} state={{searchValue: searchValue}} replace className="searchBtn" onClick={() => {
                                            props.contentToggle;
                                            props.clearSearch;
                                        }}><SearchIconContainer className="SearchIcon" size="24" /></Link>
                                    </div>
                                </FooterSearch>
                            </div>
                            <div className="copyright"> Copyright © 2023 BestBrewBlog. <br/>All Rights Reserved.</div>
                        </FooterMenuItems>
                    </nav>
                </FooterMenu>
            </div>
        </footer>
    )
}