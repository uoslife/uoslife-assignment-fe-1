"use client";

import React from "react";
import styled from "styled-components";

export type TextProps = {
  text: string;
  fontSize: number;
  fontWeight: number;
  color: string;
};

export const Text: React.FC<TextProps> = ({
  text,
  fontSize,
  fontWeight,
  color,
}) => {
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

const StyledText = styled.div<TextProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;
