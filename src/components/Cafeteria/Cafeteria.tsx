import styled from "styled-components";
import { CafeteriaType } from "./Cafeteria.type";
import Text from "../Text/Text";

interface CafeteriaProps {
  cafeteria: CafeteriaType;
}

const Cafeteria = ({ cafeteria }: CafeteriaProps) => {
  return (
    <S.cafeteriaWrapper>
      <S.locationWrapper>
        <Text
          text={cafeteria.location}
          fontSize={18}
          fontWeight={600}
          color="#3B4046"
          lineHeight={27}
        ></Text>
        <a
          href="https://www.uos.ac.kr/food/placeList.do?epTicket=INV"
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#3A88F5",
			textDecorationLine: 'none',
          }}
        >
          자세히보기
        </a>
      </S.locationWrapper>
      <S.menuWrapper>
        <S.menuBox marginBottom={8}>
          <Text
            text={cafeteria.mainMenu}
            fontSize={18}
            fontWeight={600}
            color="#3B4046"
            lineHeight={27}
          ></Text>
          <Text
            text={cafeteria.openingHours}
            fontSize={15}
            fontWeight={500}
            color="#808A98"
            lineHeight={22.5}
            width={20}
          ></Text>
        </S.menuBox>
        <S.menuBox marginBottom={1}>
          <Text
            text={cafeteria.detailMenu}
            fontSize={16}
            fontWeight={500}
            color="#808A98"
            lineHeight={22.5}
          ></Text>
        </S.menuBox>
        <S.menuBox>
          <Text
            text={cafeteria.nutritionalInfo}
            fontSize={11}
            fontWeight={500}
            color="#97A1AE"
            lineHeight={16.5}
          ></Text>
          <Text
            text={cafeteria.price}
            fontSize={18}
            fontWeight={600}
            color="#3B4046"
            lineHeight={27}
          ></Text>
        </S.menuBox>
      </S.menuWrapper>
    </S.cafeteriaWrapper>
  );
};

const S = {
  cafeteriaWrapper: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #dee1e5;
    background-color: white;
    border-radius: 16px;
    margin: 16px;
  `,
  locationWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
  `,
  menuWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 16px 16px 16px;
    border-top: 1px solid #dee1e5;
  `,
  menuBox: styled.div<{ marginBottom?: number }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
  `,
};

export default Cafeteria;
