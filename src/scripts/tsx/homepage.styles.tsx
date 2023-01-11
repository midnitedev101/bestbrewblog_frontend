import styled from 'styled-components';
import coffee_bg_1 from "../../images/coffee_bg_1.webp";

export const HomeHero = styled.div`
    div.heroWrapper {
        background-image: url(${coffee_bg_1});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        div.heroOverlay {
            background: radial-gradient(at 35% top, rgba(30, 34, 34, 0.7), rgba(30, 34, 34, 0.3));
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            display: flex;
            justify-content: center;
            min-width: 100vw;
            h1, h3 {
                color: #ffffff;
                padding: 0 5%;
                max-width: 900px;
                text-align: center;
                line-height: 1.5;
                text-shadow: 0.15rem 0.1rem #232129;
                letter-spacing: 0.025rem;
                font-family: Merriweather,Georgia,Serif,ui-serif,Cambria,Times New Roman,Times,serif;
                word-spacing: 0.05rem;
            }
        }
    }
`;

