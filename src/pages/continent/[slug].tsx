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
        className="with-gradient"
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
          <Text fontSize={["3xl", "4xl"]} color="white.50" fontWeight="700" zIndex={3}>
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
              pa??ses
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
              l??nguas
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
                    As cidades +100 s??o as cidades esse continente possui que
                    est??o entre as 100 cidades mais visitadas do mundo!
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
    // true: Quando usuario acessa o post pela primeira vez, faz a requisicao em tempo real. Mas espera a p??gina carregar para mostrar para o usuario. (Causa Layout Shift-carrega a p??gina sem o conte??do e depois preenche ele) | N??o ?? bom para SEO.

    // false: Se o post n??o foi gerado ainda, manda o erro de 404.

    // 'blocking': Parece o true, mas carrega o post no serverSide e s?? mostra a tela depois que carregou o conte??do de fato.
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
          "A ??sia ?? o maior dos continentes, tanto em ??rea como em popula????o. Abrange um ter??o das partes s??lidas da superf??cie da Terra e ?? respons??vel por abrigar quase tr??s quintos da popula????o mundial.",
        heroImageUrl: "/images/bgSliderAsia.jpg",
        infos: {
          countries: 51,
          languages: 2.301,
          cities100Plus: 18,
        },
        cities100Plus: [
          {
            country: "China",
            cityName: "Xangai",
            cardImageUrl: "https://images.adsttc.com/media/images/5f22/e94d/b357/653d/3a00/0b2a/newsletter/shangai-1-1.jpg?1596123461",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png",
          },
          {
            country: "??ndia",
            cityName: "Mumbai",
            cardImageUrl: "https://cdn.britannica.com/26/84526-004-FE8A09B5.jpg?w=575&h=450",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",
          },
          {
            country: "Paquist??o",
            cityName: "Karachi",
            cardImageUrl: "https://cdn.travelsafe-abroad.com/wp-content/uploads/53f3456c6c37d.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/pakistan-flag-png-large.png",
          },
          {
            country: "??ndia",
            cityName: "D??li",
            cardImageUrl: "https://www.girassolviagens.com/wp-content/uploads/2018/11/Roteiro-por-Nova-D%C3%A9li-na-%C3%8Dndia-900x530.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",
          },
          {
            country: "Turquia",
            cityName: "Istambul",
            cardImageUrl: "https://www.goyatravel.com.br/wp-content/uploads/2020/03/Istambul-scaled.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png",
          },
          {
            country: "Coreia do Sul",
            cityName: "Seul",
            cardImageUrl: "https://dsdsuzy1jtjfw.cloudfront.net/wp-content/uploads/2021/03/Outono-no-Palacio-Gyeongbokgung-Seul-Coreia-do-Sul-shutterstock_487257514.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png",
          },
          {
            country: "Jap??o",
            cityName: "T??quio",
            cardImageUrl: "https://static.escolakids.uol.com.br/2019/06/toquio.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png",
          },
        ],
      };
      break;

    case "europe":
      continent = {
        name: "Europa",
        description:
          "A Europa ??, por conven????o, um dos seis continentes do mundo. Compreendendo a pen??nsula ocidental da Eur??sia, a Europa geralmente divide-se da ??sia a leste pela divis??ria de ??guas dos montes Urais, o rio Ural, o mar C??spio, o C??ucaso, e o mar Negro a sudeste.",
        heroImageUrl: "/images/bgSingle.jpg",
        infos: {
          countries: 50,
          languages: 24,
          cities100Plus: 27,
        },
        cities100Plus: [
          {
            country: "Reino Unido",
            cityName: "Londres",
            cardImageUrl: "/images/bgSingle.jpg",
            countryFlagImageUrl: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png",
          },
          {
            country: "Fran??a",
            cityName: "Paris",
            cardImageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/59/86/caption.jpg?w=500&h=300&s=1",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png",
          },
          {
            country: "It??lia",
            cityName: "Roma",
            cardImageUrl: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/177493849.jpeg?quality=70&strip=info&w=925?quality=70&strip=info&w=636",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png",
          },
          {
            country: "Rep??blica Tcheca",
            cityName: "Praga",
            cardImageUrl: "https://www.segurospromo.com.br/blog/wp-content/uploads/2019/11/O-que-fazer-em-Praga.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/czech-republic-flag-png-large.png",
          },
          {
            country: "Holanda",
            cityName: "Amsterd??",
            cardImageUrl: "https://uploads.metropoles.com/wp-content/uploads/2020/12/14140154/Amsterdam-1-600x400.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png",
          },
        ],
      };
      break;

    case "north-america":
      continent = {
        name: "Am??rica do Norte",
        description:
          "A Am??rica do Norte est?? localizada no extremo norte das Am??ricas e ?? composta por apenas tr??s pa??ses: Estados Unidos, Canad?? e M??xico, al??m de territ??rios de dom??nios europeus, como a Groel??ndia (pertencente ao Reino da Dinamarca, com representa????o no parlamento) e Bermudas (depend??ncia brit??nica).",
        heroImageUrl: "/images/bgSliderNorthAmerica.jpg",
        infos: {
          countries: 3,
          languages: 6,
          cities100Plus: 2,
        },
        cities100Plus: [
          {
            country: "M??xico",
            cityName: "Cidade do M??xico",
            cardImageUrl: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/05/cidade-do-mexico-capa-820x430.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png",
          },
          {
            country: "Estados Unidos",
            cityName: "Nova Iorque",
            cardImageUrl: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3098344:1623853773/Nova-York-Times-Square.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=dbe3a4c",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
          },
          {
            country: "Canad??",
            cityName: "Toronto",
            cardImageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/e4/toronto.jpg?w=700&h=500&s=1",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png",
          },
          {
            country: "Estados Unidos",
            cityName: "Los Angeles",
            cardImageUrl: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/sunset-boulevard-los-angeles-estados-unidos1.jpeg?quality=70&strip=info&w=928?quality=70&strip=info&w=636",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
          },
          {
            country: "Canad??",
            cityName: "Montreal",
            cardImageUrl: "https://p5m2q7z5.stackpathcdn.com/wp-content/uploads/2015/12/montreal-canada.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png",
          },
        ],
      };
      break;

    case "south-america":
      continent = {
        name: "Am??rica do Sul",
        description:
          "A Am??rica do Sul ?? um continente que compreende a por????o meridional da Am??rica. Tamb??m ?? considerada um subcontinente do continente americano. A sua extens??o ?? de 17 819 100 km??, abrangendo 12% da superf??cie terrestre e 6% da popula????o mundial.",
        heroImageUrl: "/images/bgSliderSouthAmerica.jpg",
        infos: {
          countries: 12,
          languages: 1.061,
          cities100Plus: 5,
        },
        cities100Plus: [
          {
            country: "Brasil",
            cityName: "S??o Paulo",
            cardImageUrl: "https://www.euandopelomundo.com/wp-content/uploads/2019/04/sao_paulo.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
          },
          {
            country: "Peru",
            cityName: "Lima",
            cardImageUrl: "https://blog.clubecandeias.com/wp-content/uploads/2018/11/o-que-fazer-em-lima-no-peru-confira-as-nossas-dicas.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/peru-flag-png-large.png",
          },
          {
            country: "Col??mbia",
            cityName: "Bogot??",
            cardImageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/8d/0f/9a/descubre-en-nuestros.jpg?w=600&h=400&s=1",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png",
          },
          {
            country: "Brasil",
            cityName: "Rio de Janeiro",
            cardImageUrl: "https://a.cdn-hotels.com/gdcs/production187/d1216/5791a1f0-c31d-11e8-9739-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
          },
          {
            country: "Chile",
            cityName: "Santiago",
            cardImageUrl: "http://sweetway.com.br/wp-content/uploads/2019/01/tudo-o-que-voce-precisa-saber-sobre-santiago-no-chile.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png",
          },
          {
            country: "Venezuela",
            cityName: "Caracas",
            cardImageUrl: "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/south-america/venezuela/caracas/caracas-banner-mobile-1024x553.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/venezuela-flag-png-large.png",
          },
          {
            country: "Argentina",
            cityName: "Buenos Aires",
            cardImageUrl: "https://www.daninoce.com.br/wp-content/uploads/2018/01/o-que-voce-precisa-saber-antes-de-ir-a-buenos-aires-dani-noce-imagem-destaque-960x625.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-1024x642.jpg",
          },
        ],
      };
      break;

    case "oceania":
      continent = {
        name: "Oceania",
        description:
          "Oceania ou Oce??nia ?? uma regi??o geogr??fica composta por v??rios grupos de ilhas do oceano Pac??fico. O termo Oceania foi criado em 1831 pelo explorador franc??s Dumont d'Urville.",
        heroImageUrl: "/images/bgSliderOceania.jpg",
        infos: {
          countries: 14,
          languages: 18,
          cities100Plus: 5,
        },
        cities100Plus: [
          {
            country: "Austr??lia",
            cityName: "Sydney",
            cardImageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=600&h=400&s=1",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-1024x512.jpg",
          },
          {
            country: "Austr??lia",
            cityName: "Melbourne",
            cardImageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Melbourne_skyline_sor.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-1024x512.jpg",
          },
          {
            country: "Austr??lia",
            cityName: "Brisbane",
            cardImageUrl: "https://cdn.travelsafe-abroad.com/wp-content/uploads/5de6765e595cc.png",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-1024x512.jpg",
          },
          {
            country: "Austr??lia",
            cityName: "Mac????ar",
            cardImageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Makassar_CBD_Skyline.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-1024x512.jpg",
          },
          {
            country: "Indon??sia",
            cityName: "Praga",
            cardImageUrl: "https://www.segurospromo.com.br/blog/wp-content/uploads/2019/11/O-que-fazer-em-Praga.jpg",
            countryFlagImageUrl: "https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-large.png",
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
