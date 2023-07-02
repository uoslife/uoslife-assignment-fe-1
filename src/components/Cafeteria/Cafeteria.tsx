import { Text } from "../Text/Text";
import {
  TabContainer,
  InfoArea,
  InfoTitleBlock,
  InfoContentBlock,
  InfoContent1,
  InfoContent2,
  InfoTime,
  InfoMore,
} from "./Cafeteria.style";

export const Cafeteria = ({ cafeteria }: any) => {
  return (
    <>
      <TabContainer>
        <InfoArea>
          <InfoTitleBlock>
            <Text
              text={cafeteria.location}
              fontSize={18}
              fontWeight={600}
              color="#3B4046"
            />
            <InfoMore
              href={"https://www.uos.ac.kr/food/placeList.do?epTicket=LOG"}
            >
              <Text
                text="자세히보기"
                fontSize={14}
                fontWeight={400}
                color="#3A88F5"
              />
            </InfoMore>
          </InfoTitleBlock>
          <div>
            <InfoContentBlock>
              <InfoContent1 style={{ marginBottom: "8px" }}>
                <Text
                  text={cafeteria.mainMenu}
                  fontSize={18}
                  fontWeight={600}
                  color="#3B4046"
                />
                <InfoTime>
                  <Text
                    text={cafeteria.openingHours}
                    fontSize={18}
                    fontWeight={400}
                    color="#656D78"
                  />
                </InfoTime>
              </InfoContent1>
              <InfoContent2 style={{ marginBottom: "1px" }}>
                <InfoTime>
                  <Text
                    text={cafeteria.detailMenu}
                    fontSize={14}
                    fontWeight={400}
                    color="#656D78"
                  />
                </InfoTime>
              </InfoContent2>
              <InfoContent1>
                <Text
                  text={cafeteria.nutritionalInfo}
                  fontSize={10}
                  fontWeight={400}
                  color="#656D78"
                />
                <Text
                  text={cafeteria.price}
                  fontSize={18}
                  fontWeight={600}
                  color="#3B4046"
                />
              </InfoContent1>
            </InfoContentBlock>
          </div>
        </InfoArea>
      </TabContainer>
    </>
  );
};
