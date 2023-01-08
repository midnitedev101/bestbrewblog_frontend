import styled from 'styled-components';

export const SearchContainer = styled.div`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
    .searchInput {
        transform: translate(15%,0);
        display: block;
        position: relative;
        input {
            min-width: 15rem;
            min-height: 2rem;
            color: rgb(35,33,41);
            font-size: 14px;
            margin-bottom: 0px;
            line-height: 1.25;
            font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
            border: 1px solid #222;
            border-radius: 0.2rem;
            padding-left: 0.5rem;
        }
        a.searchBtn {
            position: absolute;
            width: 2rem;
            height: 2rem;
            transform: unset;
            margin: 0.20rem 0 0.20rem 16rem;
            top: 0;
        }
    }
`;
