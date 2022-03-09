import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  city: {
    country: string;
    cityName: string;
    cardImageUrl: string;
    countryFlagImageUrl: string;
  };
}

export function CityCard({ city }: CityCardProps) {
  return (
    <GridItem minWidth="250px">
      <Box
        borderWidth="1px"
        borderColor="#FFE193"
        borderRadius="lg"
        overflow="hidden"
        transition="all 0.2s"
        _hover={{
          boxShadow: "0px 4px 11px 7px #00000010",
          transform: "translateY(-9px) scale(1.05)",
        }}
      >
        <Image
          src={`${city.cardImageUrl}`}
          alt={city.cityName}
          height="200"
          bgSize="cover"
          bgPosition="center"
        />

        <Flex justifyContent="space-between" alignItems="center">
          <Box p="6" position="relative" width="100%">
            <Text
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {city.cityName}
            </Text>
            <Text isTruncated>{city.country}</Text>
          </Box>
          <Box pr="6">
            <Image
              src={`${city.cardImageUrl}`}
              alt={city.cityName}
              w="10"
              h="10"
              minW="10"
              bgSize="cover"
              bgPosition="center"
              borderRadius="full"
            />
          </Box>
        </Flex>
      </Box>
    </GridItem>
  );
}
