import styled from 'styled-components';

export const Page = styled.main`
  padding: 5%;
  color: #232129;
  font-family: -apple-system, Roboto, sans-serif, serif;
  word-wrap: break-word;
  opacity: 0;
  transition: all 0ms ease-in-out;
  z-index: 0;
  &.active {
    opacity: 1;
    z-index: 1;
  }
  @media screen and (min-width: 768px) {
    padding: 96px;
  }
  h1.pageTitle {
    position: absolute;
    transform-origin: top left;
    transform: rotate(-90deg) translateX(-100%);
    text-decoration: underline;
    text-underline-position: under;
    letter-spacing: 0.10rem;
  }

  a {
    text-decoration:none;
  }
`;

export const SinglePost = styled.main`
  padding: 5%;
  color: #232129;
  fontFamily: -apple-system, Roboto, sans-serif, serif;
  word-wrap: break-word;
  opacity: 0;
  transition: all 0ms ease-in-out;
  z-index: 0;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  position: relative;
  max-width: 768px;
  margin: 0 auto;
  &.active {
    opacity: 1;
    z-index: 1;
  }
  @media screen and (min-width: 768px) {
    padding: 0 15%;
  }

  h1.postTitle {
    font-family: Merriweather,Georgia,Serif,ui-serif,Cambria,Times New Roman,Times,serif;
    word-spacing: 0.05rem;
    color: #232129;
    @media screen and (min-width: 768px) {
      position: absolute;
      color: #fff;
      font-size: 3rem;
      left: 50%;
      top: 11rem;
      transform: translate(-50%, 0%);
      text-shadow: 0.15rem 0.1rem #232129;
      letter-spacing: 0.025rem;
    }
    span.postAuthor {
      word-break: keep-all;
      font-size: 1rem;
      display: block;
    }
  }
  figure.wp-block-image {
    margin-left: 1rem;
    margin-right: 1rem;
    img {
      max-width: 100%;
      border-radius: 0.35rem;
      height: auto;
    }
  }
  img.post-banner-img, [data-placeholder-image] {
    max-width: 100%;
    height: auto;
    border-radius: 0.35rem;
    filter: contrast(0.5);
    z-index: -1;
  }
  a {
    text-decoration:none;
  }
`;