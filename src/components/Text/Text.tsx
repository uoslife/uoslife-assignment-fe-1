import { styled } from "styled-components";

const StyledText = styled.div<textProps>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;

export type textProps = {
  text: string;
  size: number;
  weight: number;
  color: string;
};

const Text = ({ text, size, weight, color }: textProps) => {
  return (
    <StyledText text={text} size={size} weight={weight} color={color}>
      {text}
    </StyledText>
  );
};

export default Text;
