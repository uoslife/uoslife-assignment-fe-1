import { styled } from "styled-components";
import { CafeteriaType } from "./Cafeteria.type";
import Text from "./Text";

const Wrapper = styled.div`
  margin-bottom: 16px;
  border-radius: 16px;
  border: 0.666667px solid rgb(222, 225, 229);

  & > *:not(:first-child) {
    border-top: 1px solid #dee1e5;
  }
`;

type P = {
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
};

type M = {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
};

const Row = styled.div<P & M>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  padding-top: ${(({ paddingTop }) => paddingTop) || 0.1}px;
  padding-bottom: ${(({ paddingBottom }) => paddingBottom) || 0.1}px;
  padding-left: ${(({ paddingLeft }) => paddingLeft) || 0.1}px;
  padding-right: ${(({ paddingRight }) => paddingRight) || 0.1}px;

  margin-top: ${(({ marginTop }) => marginTop) || 0.1}px;
  margin-bottom: ${(({ marginBottom }) => marginBottom) || 0.1}px;
  margin-left: ${(({ marginLeft }) => marginLeft) || 0.1}px;
  margin-right: ${(({ marginRight }) => marginRight) || 0.1}px;
`;

const Col = styled.div<P & M>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-top: ${(({ paddingTop }) => paddingTop) || 0.1}px;
  padding-bottom: ${(({ paddingBottom }) => paddingBottom) || 0.1}px;
  padding-left: ${(({ paddingLeft }) => paddingLeft) || 0.1}px;
  padding-right: ${(({ paddingRight }) => paddingRight) || 0.1}px;

  margin-top: ${(({ marginTop }) => marginTop) || 0.1}px;
  margin-bottom: ${(({ marginBottom }) => marginBottom) || 0.1}px;
  margin-left: ${(({ marginLeft }) => marginLeft) || 0.1}px;
  margin-right: ${(({ marginRight }) => marginRight) || 0.1}px;
`;

const Detail = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Cafeteria = ({ cafeteria }: { cafeteria: CafeteriaType }) => {
  return (
    <Wrapper>
      <Row
        paddingTop={12}
        paddingBottom={12}
        paddingLeft={16}
        paddingRight={16}>
        <Text
          text={cafeteria.location}
          fontSize={18}
          fontWeight={600}
          color={"black"}
        />
        <Detail
          onClick={() => {
            alert("ㅋㅋ");
          }}>
          <Text
            text={"자세히보기"}
            fontSize={15}
            fontWeight={500}
            color="rgb(58, 136, 245)"
          />
        </Detail>
      </Row>
      <Col
        paddingTop={10}
        paddingBottom={16}
        paddingLeft={16}
        paddingRight={16}>
        <Row marginBottom={8}>
          <Text
            text={cafeteria.mainMenu}
            fontSize={18}
            fontWeight={600}
            color={"black"}
          />
          <Text
            text={cafeteria.openingHours}
            color={"rgb(128, 138, 152)"}
            fontSize={15}
            fontWeight={500}
          />
        </Row>
        <Row>
          <Text
            text={cafeteria.detailMenu}
            color={"rgb(128, 138, 152)"}
            fontSize={15}
            fontWeight={500}
          />
        </Row>
        <Row>
          <Text
            text={cafeteria.nutritionalInfo}
            color={"rgb(151, 161, 174)"}
            fontSize={11}
            fontWeight={500}
          />
          <Text
            text={cafeteria.price}
            color={"rgb(59, 64, 70)"}
            fontSize={18}
            fontWeight={600}
          />
        </Row>
      </Col>
    </Wrapper>
  );
};

export default Cafeteria;
