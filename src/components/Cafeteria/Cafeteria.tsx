import { styled } from "styled-components";
import { CafeteriaType } from "./Cafeteria.type";
import Text from "../Text/Text";
import { colors } from "../../utils/styles/color.config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dee1e5;
  background-color: white;
  border-radius: 16px;
  margin-bottom: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  gap: 5px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BorderTop = styled.div`
  border-top: 1px solid #dee1e5;
`;

export type CafeteriaProps = {
  cafeteria: CafeteriaType;
};

export const Cafeteria = ({ cafeteria }: CafeteriaProps) => {
  const {
    location,
    mainMenu,
    detailMenu,
    nutritionalInfo,
    openingHours,
    price,
  } = cafeteria;
  return (
    <>
      <Container>
        <TextContainer>
          <TextWrapper>
            <Text
              text={location}
              fontSize={"lg"}
              fontWeight={600}
              color={colors.Secondary900}
            />
            <Text text={"자세히보기"} color={colors.Primary600} />
          </TextWrapper>
        </TextContainer>
        <BorderTop />
        <TextContainer>
          <TextWrapper>
            <Text
              text={mainMenu}
              fontSize={"lg"}
              fontWeight={600}
              color={colors.Secondary900}
            />
            <Text text={openingHours} color={colors.Secondary700} />
          </TextWrapper>
          <TextWrapper>
            <Text text={detailMenu} color={colors.Secondary700} />
          </TextWrapper>
          <TextWrapper>
            <Text
              text={nutritionalInfo}
              fontSize={"sm"}
              color={colors.Secondary600}
            />
            <Text
              text={price}
              fontSize={"lg"}
              fontWeight={600}
              color={colors.Secondary900}
            />
          </TextWrapper>
        </TextContainer>
      </Container>
    </>
  );
};

export default Cafeteria;
