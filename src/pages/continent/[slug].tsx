import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { CityCard } from "../../components/CityCard";
interface ContinentProps {
  continent: {
    name: string;
    description: string;
    heroImageUrl: string;
    infos: {
      countries: number;
      languages: number;
      cities100Plus: number;
    };
    cities100Plus: Cities100PlusProps[];
  };
}

interface Cities100PlusProps {
  country: string;
  cityName: string;
  cardImageUrl: string;
  countryFlagImageUrl: string;
}

export default function Continent({ continent }: ContinentProps) {
  const { name, description, heroImageUrl, infos, cities100Plus } = continent;

  return (
    <>
      <Head>
        <title>{name} | World Trip</title>
      </Head>
      <Header showBackButton />

      <Flex
        as="image"
        bgImage={`url('${heroImageUrl}')`}
        bgSize="cover"
        bgPosition="center"
        h={["200", "400", "500"]}
        justifyContent="center"
      >
        <Flex
          w="100%"
          my="12"
          maxWidth={1240}
          mx="auto"
          px={"6"}
          justifyContent={["center", "flex-start"]}
          alignItems={["center", "flex-end"]}
          position="relative"
        >
          <Text fontSize={["3xl", "4xl"]} color="white.50" fontWeight="700">
            {name}
          </Text>
        </Flex>
      </Flex>

      <Flex
        w="100%"
        my="12"
        maxWidth={1240}
        mx="auto"
        px={"6"}
        justifyContent="space-between"
        alignItems="center"
        position="relative"
        gap={["8", "12"]}
        flexDirection={["column", "column", "row"]}
      >
        <Box width="100%">
          <Text fontSize={["lg", "xl"]} color="black.50" textAlign="justify">
            {description}
          </Text>
        </Box>
        <HStack
          spacing={["4", "12"]}
          width={["100%", "100%", "70%"]}
          justifyContent={["flex-start", "flex-start", "center"]}
        >
          <VStack spacing={[-1, -1.5]} alignItems={["flex-start", "center"]}>
            <Text color="yellow.900" fontWeight="600" fontSize={["3xl", "5xl"]}>
              {infos.countries}
            </Text>
            <Text
              color="black.50"
              fontWeight={["500", "700"]}
              fontSize={["lg", "xl"]}
            >
              países
            </Text>
          </VStack>
          <VStack spacing={[-1, -1.5]} alignItems={["flex-start", "center"]}>
            <Text color="yellow.900" fontWeight="600" fontSize={["3xl", "5xl"]}>
              {infos.languages}
            </Text>
            <Text
              color="black.50"
              fontWeight={["500", "700"]}
              fontSize={["lg", "xl"]}
            >
              línguas
            </Text>
          </VStack>
          <VStack spacing={[-1, -1.5]} alignItems={["flex-start", "center"]}>
            <Text color="yellow.900" fontWeight="600" fontSize={["3xl", "5xl"]}>
              {infos.cities100Plus}
            </Text>
            <Text
              color="black.50"
              fontWeight={["500", "700"]}
              fontSize={["lg", "xl"]}
            >
              cidades +100
              <Popover placement="top-start" isLazy trigger="hover">
                <PopoverTrigger>
                  {/* <Tooltip
                    hasArrow
                    placement="top"
                    label="Clique e saiba mais"
                    bg="gray.300"
                    color="black"
                  > */}
                  <InfoOutlineIcon
                    ml="2"
                    color="#C7C9C9"
                    _hover={{ cursor: "pointer" }}
                  />
                  {/* </Tooltip> */}
                </PopoverTrigger>
                <PopoverContent bg="white">
                  <PopoverHeader fontWeight="semibold" fontSize="md">
                    As cidades +100
                  </PopoverHeader>
                  <PopoverArrow bg="white" />
                  <PopoverCloseButton />
                  <PopoverBody fontSize="md" fontWeight="normal">
                    As cidades +100 são as cidades esse continente possui que
                    estão entre as 100 cidades mais visitadas do mundo!
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Text>
          </VStack>
        </HStack>
      </Flex>

      <Flex
        w="100%"
        my="12"
        maxWidth={1240}
        mx="auto"
        px={"6"}
        justifyContent="flex-start"
        alignItems="flex-end"
        position="relative"
      >
        <Text fontSize={["xl", "3xl"]} color="black.50" fontWeight="700">
          Cidades +100
        </Text>
      </Flex>

      <Flex
        w="100%"
        my="12"
        maxWidth={1240}
        mx="auto"
        px={"6"}
        justifyContent="flex-start"
        alignItems="flex-end"
        position="relative"
        gap="6"
      >
        <SimpleGrid
          gap={[6,12]}
          w="100%"
          minChildWidth="250px"
        >
          {cities100Plus.map((city, index) => (
            <CityCard key={index} city={city} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      "/continent/asia",
      "/continent/europe",
      "/continent/north-america",
      "/continent/south-america",
      "/continent/oceania",
    ],
    fallback: "blocking",
    // true: Quando usuario acessa o post pela primeira vez, faz a requisicao em tempo real. Mas espera a página carregar para mostrar para o usuario. (Causa Layout Shift-carrega a página sem o conteúdo e depois preenche ele) | Não é bom para SEO.

    // false: Se o post não foi gerado ainda, manda o erro de 404.

    // 'blocking': Parece o true, mas carrega o post no serverSide e só mostra a tela depois que carregou o conteúdo de fato.
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  let continent = {};

  switch (slug) {
    case "asia":
      continent = {
        name: "Asia",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lacinia turpis. Donec ut consectetur ante. In blandit, leo sed imperdiet pellentesque, elit purus tempor ex, ut ultrices ipsum felis ut neque. Donec eu semper orci. Suspendisse mattis tempus sodales. Aliquam consectetur arcu in efficitur rutrum. In nec neque quis nulla tempus tristique. Aenean id leo non ex porta aliquet nec ut ligula.",
        heroImageUrl: "/images/bgSingle.jpg",
        infos: {
          countries: 50,
          languages: 60,
          cities100Plus: 27,
        },
        cities100Plus: [
          {
            country: "Reino Unido",
            cityName: "Londres",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "França",
            cityName: "Paris",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Itália",
            cityName: "Roma",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "República Tcheca",
            cityName: "Praga",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Holanda",
            cityName: "Amsterdã",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
        ],
      };
      break;

    case "europe":
      continent = {
        name: "Europa",
        description:
          "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
        heroImageUrl: "/images/bgSingle.jpg",
        infos: {
          countries: 50,
          languages: 60,
          cities100Plus: 27,
        },
        cities100Plus: [
          {
            country: "Reino Unido",
            cityName: "Londres",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "França",
            cityName: "Paris",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Itália",
            cityName: "Roma",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "República Tcheca",
            cityName: "Praga",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Holanda",
            cityName: "Amsterdã",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
        ],
      };
      break;

    case "north-america":
      continent = {
        name: "América do Norte",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lacinia turpis. Donec ut consectetur ante. In blandit, leo sed imperdiet pellentesque, elit purus tempor ex, ut ultrices ipsum felis ut neque. Donec eu semper orci. Suspendisse mattis tempus sodales. Aliquam consectetur arcu in efficitur rutrum. In nec neque quis nulla tempus tristique. Aenean id leo non ex porta aliquet nec ut ligula.",
        heroImageUrl: "/images/bgSingle.jpg",
        infos: {
          countries: 55,
          languages: 35,
          cities100Plus: 28,
        },
        cities100Plus: [
          {
            country: "Reino Unido",
            cityName: "Londres",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "França",
            cityName: "Paris",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Itália",
            cityName: "Roma",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "República Tcheca",
            cityName: "Praga",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Holanda",
            cityName: "Amsterdã",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
        ],
      };
      break;

    case "south-america":
      continent = {
        name: "América do Sul",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lacinia turpis. Donec ut consectetur ante. In blandit, leo sed imperdiet pellentesque, elit purus tempor ex, ut ultrices ipsum felis ut neque.",
        heroImageUrl: "/images/bgSingle.jpg",
        infos: {
          countries: 12,
          languages: 101,
          cities100Plus: 15,
        },
        cities100Plus: [
          {
            country: "Reino Unido",
            cityName: "Londres",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "França",
            cityName: "Paris",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Itália",
            cityName: "Roma",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "República Tcheca",
            cityName: "Praga",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Holanda",
            cityName: "Amsterdã",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
        ],
      };
      break;

    case "oceania":
      continent = {
        name: "Oceania",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lacinia turpis. Donec ut consectetur ante. In blandit, leo sed imperdiet pellentesque, elit purus tempor ex, ut ultrices ipsum felis ut neque.",
        heroImageUrl: "/images/bgSingle.jpg",
        infos: {
          countries: 25,
          languages: 56,
          cities100Plus: 17,
        },
        cities100Plus: [
          {
            country: "Reino Unido",
            cityName: "Londres",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "França",
            cityName: "Paris",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Itália",
            cityName: "Roma",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "República Tcheca",
            cityName: "Praga",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Holanda",
            cityName: "Amsterdã",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Reino Unido",
            cityName: "Londres",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "França",
            cityName: "Paris",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Itália",
            cityName: "Roma",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "República Tcheca",
            cityName: "Praga",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Holanda",
            cityName: "Amsterdã",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Reino Unido",
            cityName: "Londres",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "França",
            cityName: "Paris",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Itália",
            cityName: "Roma",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "República Tcheca",
            cityName: "Praga",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
          {
            country: "Holanda",
            cityName: "Amsterdã",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "/images/bgSingle.jpg",
          },
        ],
      };
      break;

    default:
      continent = {
        name: "Continente",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lacinia turpis. Donec ut consectetur ante. In blandit, leo sed imperdiet pellentesque, elit purus tempor ex, ut ultrices ipsum felis ut neque. Donec eu semper orci. Suspendisse mattis tempus sodales. Aliquam consectetur arcu in efficitur rutrum. In nec neque quis nulla tempus tristique. Aenean id leo non ex porta aliquet nec ut ligula.",
        heroImageUrl: "/images/bgSingle.jpg",
        infos: {
          countries: 0,
          languages: 0,
          cities100Plus: 0,
        },
        cities100Plus: [],
      };
      break;
  }

  return {
    props: {
      continent,
    },
    // redirect: 60 * 60, // 1 hour
  };
};
