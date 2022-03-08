import {
  Center,
  Circle,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface TravelTypeBox {
  imageName: string;
  title: string;
}

export function TravelTypesBox({ imageName, title }: TravelTypeBox) {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Center flexDirection={isWideScreen ? "column" : "row"}>
      {isWideScreen ? (
        <Image
          w="85px"
          h="85px"
          src={`/images/icons/${imageName}`}
          alt="Cock tail icon"
          display={["none", "block"]}
        />
      ) : (
        <Circle size="10px" bg="yellow.900"></Circle>
      )}
      <Text
        fontSize={["large", "2xl"]}
        fontWeight="600"
        color="black.50"
        mt={isWideScreen ? "6" : "0"}
        ml={isWideScreen ? "0" : "2"}
      >
        {title}
      </Text>
    </Center>
  );
}
