import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { colors } from "./utils/styles/color.config";
import { typographies } from "./utils/styles/typography.config";

export const theme = {
  ...colors,
  ...typographies,
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: Pretendard;
    font-weight: 500;
  }
`;

export default GlobalStyle;
