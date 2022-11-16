import { createGlobalStyle } from "styled-components";

interface Props {
  imgURL: string;
}

const GlobalStyle = createGlobalStyle<Props>`
  body {
    font-family: 'Roboto Slab', 'Montserrat', sans-serif;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    width: 100%;
    background: url(${props => props.imgURL});

    &:after {
      position: fixed;
      content: '';
      top: 0;
      left: 0;
      display: block;
      height: 100%;
      width: 100%;
      z-index: -100;
      backdrop-filter: blur(10px);
    }
  }
`;

export default GlobalStyle;