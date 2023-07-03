import { styled } from "styled-components";

const Container = styled.div<{
  fontSize: number;
  fontWeight: number;
  color: string;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ fontSize }) => fontSize * 1.5}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

const Text = ({
  text,
  fontSize,
  fontWeight,
  color,
}: {
  text: string;
  fontSize: number;
  fontWeight: number;
  color: string;
}) => {
  return (
    <Container fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {text}
    </Container>
  );
};

export default Text;
