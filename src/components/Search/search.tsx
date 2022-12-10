import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'   // imports that allow graphql to query wordpress backend content
import { SearchContainer } from "./search.styles"
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

export default function Search(props) {

  // const [searchValue, setSearchValue] = useState("");

  // const handleSearch = (event) => { // function to retrieve typed value on search field
  //   setSearchValue(event.target.value);
  // };

  // console.log(props.searchValue)
  // const searchPage = "/search?query="

  return (
    <SearchContainer>
      <div className="searchInput">
        <input type="text" placeholder="Search posts" onChange={props.handleSearch} value={props.searchValue} />
        <Link to={"/search"} state={{searchValue: props.searchValue}} replace className="searchBtn" onClick={() => {
          props.contentToggle();
          props.clearSearch();
          }}><SearchIconContainer className="SearchIcon" size="24" /></Link>
      </div>
    </SearchContainer>
  )
}