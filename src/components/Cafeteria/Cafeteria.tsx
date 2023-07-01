import { CafeteriaType, Text } from "components";

const Cafeteria: React.FC<CafeteriaType> = (cafeteria) => {
  return (
    <>
      <Text
        text={cafeteria.location}
        fontSize={3}
        fotWeight={2}
        color={"red"}
      />
    </>
  );
};
