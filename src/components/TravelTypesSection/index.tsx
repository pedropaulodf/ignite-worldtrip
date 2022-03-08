import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { TravelTypesBox } from "./TravelTypesBox";

export function TravelTypesSection() {
  return (
    <Flex
      w="100%"
      mt={["12", "20", "28"]}
      mb={["12", "12", "20"]}
      maxWidth={1240}
      mx="auto"
      px="6"
      justifyContent="center"
      alignContent="center"
      position="relative"
    >
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
        gap={6}
        w="100%"
      >
        <GridItem w="100%">
          <TravelTypesBox title="vida noturna" imageName="cocktailIcon.svg" />
        </GridItem>
        <GridItem w="100%">
          <TravelTypesBox title="praia" imageName="surfIcon.svg" />
        </GridItem>
        <GridItem w="100%">
          <TravelTypesBox title="moderno" imageName="buildingIcon.svg" />
        </GridItem>
        <GridItem w="100%">
          <TravelTypesBox title="clássico" imageName="museumIcon.svg" />
        </GridItem>
        <GridItem w="100%" colSpan={[2, 1]}>
          <TravelTypesBox title="e mais..." imageName="earthIcon.svg" />
        </GridItem>
      </Grid>
    </Flex>
  );
}
