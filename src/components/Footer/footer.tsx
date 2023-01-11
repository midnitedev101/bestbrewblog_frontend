import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';   // imports that allow graphql to query wordpress backend content
import { FooterMenu, FooterMenuItems, FooterSearch } from './footer.styles';
import Search from '../Search/search';
import { Search as SearchIcon } from "@styled-icons/bootstrap/Search"
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
                        <a href={"/"} rel="noopener noreferrer" className="logoContainer">
                            <img
                                alt="BestBrewBlog Logo"
                                src="data:image/svg+xml,%3Csvg width='64' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
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