import React, { FC } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { CafeteriaType } from "./Cafeteria.type";

interface CafeteriaProps {
  cafeteria: CafeteriaType;
}

const CafeteriaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dee1e5;
  background-color: white;
  border-radius: 16px;
  margin-bottom: 16px;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled(StyledFlexContainer)`
  padding: 12px 16px;
`;

const CafeteriaDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 16px 16px 16px;
  border-top: 1px solid #dee1e5;
  gap: 12px;
`;

const Cafeteria: FC<CafeteriaProps> = ({ cafeteria }) => {
  return (
    <CafeteriaWrapper>
      <Header>
        <Text text={cafeteria.location} fontSize={18} fontWeight={600} color="#3B4046" />
        <a href="https://www.uos.ac.kr/food/placeList.do?epTicket=INV" style={{ fontSize: "15px", color: "#3A88F5", textDecoration: "none" }}>
          자세히보기
        </a>
      </Header>
      <CafeteriaDetail>
        <StyledFlexContainer>
          <Text text={cafeteria.mainMenu} fontSize={18} fontWeight={600} color="#3B4046" />
          <Text text={cafeteria.openingHours} fontSize={15} fontWeight={500} color="#808A98" />
        </StyledFlexContainer>
        <StyledFlexContainer>
          <Text text={cafeteria.detailMenu} fontSize={16} fontWeight={500} color="#808A98" />
        </StyledFlexContainer>
        <StyledFlexContainer>
          <Text text={cafeteria.nutritionalInfo} fontSize={11} fontWeight={500} color="#97A1AE" />
          <Text text={cafeteria.price} fontSize={18} fontWeight={600} color="#3B4046" />
        </StyledFlexContainer>
      </CafeteriaDetail>
    </CafeteriaWrapper>
  );
};

export default Cafeteria;

