import styled from 'styled-components';

export const PostsContainer = styled.ul`
    opacity: 1;
    position: relative;
    width: 100%;
    display: block;
    padding: 1%;
    margin: 0 auto;
    @media screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        justify-content: center;
    }
    li {
        margin: 0 auto 0 0;
        @media screen and (min-width: 1200px) {
            padding: 0 5%;
        }
    }

`;

export const Post = styled.li`
    list-style:none;

    h3 {
        display: inline-block;
        margin: 0 0.25rem auto 0;
        font-family: Merriweather,Georgia,Serif,ui-serif,Cambria,Times New Roman,Times,serif;
        color: rgb(35,33,41);
    }
    img, [data-placeholder-image] {
        width: 100%;
        max-height: 20rem;
        border-radius: 0.35rem;
        object-fit: cover;
    }
    p, label {
        color: rgb(35, 33, 41);
        font-size: 14px;
        margin-bottom: 0px;
        line-height: 1.25;
        font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    }
    p {
        margin-top: 10px;
    }
    label {
        display: inline-block;
    }
    a {
        text-decoration:none;
        position: relative;
        display: block;
        div.postText {
            margin: 1rem auto;
        }
        div.gatsby-image-wrapper-constrained {
            width: 100%;
        }
    }
`;