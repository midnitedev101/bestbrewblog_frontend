import styled from 'styled-components';

export const FooterMenuItems = styled.ul`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-weight: 600;
  margin: 0 auto;
  padding: 0;
  text-align: center;
li {
    list-style: none;
    display: inline-block;
    margin: 0 1rem;
    a {
        text-decoration: none;
        color: #222;
        font-size: 1rem;
    }
}
.footer_search {
  
}
`;

export const FooterMenu = styled.div`
  .nav {
    a.logoContainer {
      display: block;
      z-index: 0;
      margin: 0 auto;
      img {
        position: relative;
        margin: 1rem auto;
        display: block;
      }
    }
  }
  .nav-tgl {
    display: inline-block;
    cursor: pointer;
    position: fixed;
    z-index: 100;
    right: 30px;
    top: 30px;
    width: 70px;
    height: 70px;
    border: none;
    border-radius: 50%;
    padding: 0;
    background: #fff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
    line-height: 0.6;
    text-align: center;
    
    // making the dividers
    > span {
      // the second divider
      display: inline-block;
      position: relative;
      height: 2px;
      width: 34px;
      border-radius: 1px;
      background: #293335;
      vertical-align: middle;
      
      // the first & the third dividers
      &:before, &:after {
        display: inline-block;
        position: absolute;
        content: "";
        height: 2px;
        border-radius: 1px;
        background: #293335;
        // for the hover state
        transition: all 200ms;
      }
      &:before {
        top: -11px;
        left: 3px;
        width: 28px;
      }
      &:after {
        top: 11px;
        left: 6px;
        width: 22px;
      }
    }
    
    // of course we should find a replacement for the focus state but it's not our topic
    &:focus {outline: none}
    
    &:hover > span:after, &:hover > span:before {
      width: 34px;
      left: 0;
    }
  }

  &.active {
    .nav:before {
      opacity: 1;
      clip-path: circle(100%);
    }
    .nav-tgl > span {
      height: 0;
      &:after, &:before {
        top: 0px;
        left: 0;
        width: 34px;
      }
      &:after {
        transform: rotate(-45deg);
      }
      &:before {
        transform: rotate(45deg);
      }
    }
    .nav {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      a.logoContainer {
        opacity: 1;
        position: relative;
        transition: all 1250ms ease-in-out;
      }
      ul {
        opacity: 1;
        position: relative;
        transition: all 1250ms ease-in-out;
        margin-top: 2%;
        li {
          margin: 1rem auto;
          a {
            transform: translate(15%,0);
            display: block;
            pointer-events: unset;
          }
        }
      }
    }
  }

  .copyright {
    font-size: 12px;
    font-weight: 100;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const FooterSearch = styled.div`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
    .searchInput {
        display: block;
        position: relative;
        margin: 1rem auto;
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
            padding-right: 2.25rem;
        }
        a.searchBtn {
            position: absolute;
            width: 2rem;
            height: 2rem;
            transform: unset;
            margin: 0.20rem 0 0.20rem -2.25rem;
            top: 0;
            svg {
              fill: #222;
            }
        }
    }
`;