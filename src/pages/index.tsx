import {
  Box,
  Center,
  Circle,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import HomeSlider from "../components/HomeSlider";
import { TravelTypesSection } from "../components/TravelTypesSection";

export default function Home() {

  const data = {
    sliders: [
      { title: "Europa", subtitle: "O continente mais antigo", urlImage: "/images/bgSliderEurope.png", slug: "europe" },
      { title: "América do Norte", subtitle: "O continente mais poderoso", urlImage: "/images/bgSliderNorthAmerica.jpg", slug: "north-america" },
      { title: "América do Sul", subtitle: "O continente mais colorido", urlImage: "/images/bgSliderSouthAmerica.jpg", slug: "south-america" },
      { title: "Ásia", subtitle: "O continente mais populoso", urlImage: "/images/bgSliderAsia.jpg", slug: "asia" },
      { title: "Oceania", subtitle: "O continente mais exótico", urlImage: "/images/bgSliderOceania.jpg", slug: "oceania" },
    ],
  };
  
  return (
    <Box>
      <Header />

      <Banner />

      <TravelTypesSection />

      <Flex justifyContent="center">
        <Divider
          maxWidth="90px"
          alignSelf="center"
          bg="gray.900"
          h="2px"
          borderRadius="full"
        />
      </Flex>

      <Flex justifyContent="center" textAlign="center" mt="12">
        <Text fontSize={["2xl", "4xl"]} fontWeight="500">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>

      <HomeSlider sliders={data.sliders} />
    </Box>
  );
}
