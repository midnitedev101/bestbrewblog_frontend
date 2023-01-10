import styled from 'styled-components';

export const HeaderMenuItems = styled.ul`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;

li {
    list-style: none;
    a {
        text-decoration: none;
        color: #222;
        font-size: 2rem;
    }
}
`;

export const HeaderMenu = styled.div`
  .nav {
    a.logoContainer {
      opacity: 0;
      margin-top: 10%;
      margin-left: 15%;
      position: fixed;
      display: block;
      z-index: 0;
      img {
        position: relative;
      }
    }
    ul {
      opacity: 0;
      position: fixed;
      li {
        a {
          pointer-events: none;
        }
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

  // for the nav background (styling the nav itself is not our topic)
  .nav:before {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    content: '';
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 1);
    transition: all 500ms ease-in-out;
    
    // that's all the pen about
    clip-path: circle(30px at calc(100% - 65px) 65px);
    // for AT
    opacity: 0;
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
`;