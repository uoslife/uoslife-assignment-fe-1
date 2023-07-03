import { theme } from "../../GlobalStyle";
import styled, { css } from "styled-components";

const StyledText = styled.div<textProps>`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  ${({ fontSize }) => getTextSize(fontSize)};
`;

export type textProps = {
  text?: string;
  fontSize?: "sm" | "md" | "lg";
  fontWeight?: number;
  color?: string;
};

const getTextSize = (fontSize?: textProps["fontSize"]) => {
  switch (fontSize) {
    case "sm": {
      return css`
        ${theme.Text_sm};
      `;
    }
    case "md": {
      return css`
        ${theme.Text_md};
      `;
    }
    case "lg": {
      return css`
        ${theme.Text_lg};
      `;
    }
    default: {
      return css`
        ${theme.Text_md};
      `;
    }
  }
};

export const Text = ({
  text,
  fontSize,
  fontWeight = 500,
  color,
}: textProps) => {
  return (
    <StyledText
      text={text}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {text}
    </StyledText>
  );
};

export default Text;
