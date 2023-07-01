import { Text } from "../Text/Text";

export const Cafeteria = (cafeteria: any) => {
  return (
    <>
      <Text
        text={cafeteria.location}
        fontSize={20}
        fontWeight={400}
        color="#656D78"
      />
      <Text
        text={cafeteria.mainMenu}
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
        text={cafeteria.openingHours}
        fontSize={20}
        fontWeight={400}
        color="#656D78"
      />
      <Text text={cafeteria.price} fontSize={3} fontWeight={2} color={"red"} />
    </>
  );
};
