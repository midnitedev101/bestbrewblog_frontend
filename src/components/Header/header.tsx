import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';   // imports that allow graphql to query wordpress backend content
import { HeaderMenu, HeaderMenuItems } from './header.styles';
import Search from '../Search/search';

export default function Header(props) {
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
        <header>
            <div className="headerWrap">
                <img
                    alt="BestBrewBlog Logo"
                    src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
                />
                <HeaderMenu className={props.contentActive ? "" : "active"}>    {/* Checks read-only contentActive; If contentActive is true, hides header; if false, shows header */}
                    <button className="nav-tgl" aria-label="toggle menu" onClick={props.contentToggle}> {/* Triggers parent component contentToggle function to set whether header is visible or not */}
                        <span aria-hidden="true"></span>
                    </button>
                    <nav className="nav">
                        <a href={"/"} rel="noopener noreferrer" className="logoContainer">
                            <img
                                alt="BestBrewBlog Logo"
                                src="data:image/svg+xml,%3Csvg width='64' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
                            />
                        </a>
                        <HeaderMenuItems>
                            <li key="menuItem_posts"><a href="/posts" rel="noopener noreferrer">Posts</a></li>
                            {data.menu.menuItems.nodes.map((node, i) =>
                                <li key={"menuItem_"+i}><a href={node.url} rel="noopener noreferrer">{node.label}</a></li>
                            )}
                            <li key="menutItem_search" className="search"><Search searchValue={searchValue} handleSearch={handleSearch} clearSearch={clearSearch} contentActive={props.contentActive} contentToggle={props.contentToggle} /></li>
                        </HeaderMenuItems>
                    </nav>
                </HeaderMenu>
            </div>
        </header>
    )
}