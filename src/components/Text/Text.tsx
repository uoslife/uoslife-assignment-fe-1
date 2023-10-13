import styled from "styled-components";
import { TextType } from "./Text.type";

const Text = ({
  text,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  width,
}: TextType & { width?: number; lineHeight?: number }) => {
  return (
    <S.textWrapper width={width} lineHeight={lineHeight}>
      <S.text
        text={text}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
      >
        {text}
      </S.text>
    </S.textWrapper>
  );
};

const S = {
  textWrapper: styled.div<{ width?: number; lineHeight?: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width}%;
    line-height: ${({ lineHeight }) => lineHeight}px;
  `,
  text: styled.div<TextType>`
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};
  `,
};

export default Text;
