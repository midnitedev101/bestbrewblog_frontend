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
        @media screen and (min-width: 1200px) {
            padding: 0 5%;
        }
    }

`;

export const Post = styled.li`
    list-style:none;
    margin: 1rem auto;
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
    p, label, span.postSpan, span.postDate, span.postWordCnt {
        color: rgb(35, 33, 41);
        font-size: 14px;
        margin-bottom: 0px;
        line-height: 1.25;
        font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    }
    p, span.postSpan {
        margin-top: 10px;
    }
    span.postSpan {
        display: block;
        text-align: left;
    }
    div.somePostDetails {
        display: block;
        margin-top: 10px;
    }
    span.postDate {
        display: inline-block;
        font-size: 12px;
    }
    span.postWordCnt {
        display: inline-block;
        float: right;
        font-size: 12px;
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
            a {
                font-weight: 700;
                pointer-events: none;
                margin: 0.5rem auto;
                color: rgb(35,33,41);
            }
        }
        div.gatsby-image-wrapper-constrained {
            width: 100%;
        }
    }
`;