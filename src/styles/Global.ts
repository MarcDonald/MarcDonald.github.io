import { createGlobalStyle } from 'styled-components';
import { px2vw} from '../utils/StyleUtils';
import { size } from '../utils/Breakpoints';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  :root {
    font-size: ${px2vw(52)};

    @media (min-width: ${size.tablet}) {
      font-size: ${px2vw(36)};
    }

    @media (min-width: ${size.smallDesktop}) {
      font-size: ${px2vw(20)};
    }

    @media (min-width: ${size.desktop}) {
      font-size: ${px2vw(12)};
    }
  }
`;

export default GlobalStyle;