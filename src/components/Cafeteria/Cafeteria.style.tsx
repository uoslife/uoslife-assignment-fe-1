import styled from "styled-components";

export const TabContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
`;

export const InfoArea = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid;
  background-color: white;
  border-radius: 16px;
  margin-bottom: 16px;
`;
export const InfoTitleBlock = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`;

export const InfoContentBlock = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 16px 16px 16px;
  border-top: 1px solid;
`;

export const InfoContent1 = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContent2 = styled("div")`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const InfoTime = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoMore = styled("a")`
  cursor: pointer;
  text-decoration: none;
  :hover {
    font-weight: 700;
  }
`;
