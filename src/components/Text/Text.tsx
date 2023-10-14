import { FC } from "react";
import styled from "styled-components";

interface StyledTextProps {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
}

const StyledText = styled.div<StyledTextProps>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

interface TextProps extends StyledTextProps {
  text: string;
}

const Text: FC<TextProps> = ({ text, fontSize, fontWeight, color }) => {
  return (
    <StyledText fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {text}
    </StyledText>
  );
};

export default Text;
