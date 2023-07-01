import { Text } from "../Text/Text";
import { Wrapper, TopBox, BottomBox } from "./Cafeteria.style";

export const Cafeteria = (cafeteria: any) => {
  return (
    <>
      <Wrapper>
        <TopBox>
          <Text
            text={cafeteria.location}
            fontSize={18}
            fontWeight={600}
            color="#3B4046"
          />
        </TopBox>
        <BottomBox>
          <Text
            text={cafeteria.mainMenu}
            fontSize={20}
            fontWeight={400}
            color="#656D78"
          />
          <Text
            text={cafeteria.openingHours}
            fontSize={20}
            fontWeight={400}
            color="#656D78"
          />
          <Text
            text={cafeteria.detailMenu}
            fontSize={20}
            fontWeight={400}
            color="#656D78"
          />
          <Text
            text={cafeteria.nutritionalInfo}
            fontSize={20}
            fontWeight={400}
            color="#656D78"
          />
          <Text
            text={cafeteria.price}
            fontSize={20}
            fontWeight={400}
            color="#656D78"
          />
        </BottomBox>
      </Wrapper>
    </>
  );
};
