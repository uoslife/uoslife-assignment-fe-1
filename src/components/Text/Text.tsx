import { theme } from "../../GlobalStyle";
import styled, { css } from "styled-components";

const StyledText = styled.div<textProps>`
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  ${({ size }) => getTextSize(size)};
`;

export type textProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  weight?: number;
  color?: string;
};

const getTextSize = (size?: textProps["size"]) => {
  switch (size) {
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

const Text = ({ label, size, weight = 500, color }: textProps) => {
  return (
    <StyledText label={label} size={size} weight={weight} color={color}>
      {label}
    </StyledText>
  );
};

export default Text;
