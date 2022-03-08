import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
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
interface ContinentProps {
  continent: {
    slug: string;
  };
}

export default function Continent({ continent }: ContinentProps) {
  const { slug } = continent;

  return (
    <>
      <Head>
        <title>{slug} | World Trip</title>
      </Head>
      <Header showBackButton />

      <Flex
        as="image"
        bgImage="url('/images/bgSingle.jpg')"
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
            {slug}
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
        <Text
          fontSize={["lg", "xl"]}
          color="black.50"
          textAlign="justify"
          width="100%"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <HStack
          spacing={["6", "12"]}
          width={["100%", "100%", "70%"]}
          justifyContent={["flex-start", "flex-start", "center"]}
        >
          <VStack spacing={[-1, -1.5]} alignItems={["flex-start", "center"]}>
            <Text color="yellow.900" fontWeight="600" fontSize={["3xl", "5xl"]}>
              50
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
              60
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
              27
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
                      ml="3"
                      color="#C7C9C9"
                      _hover={{ cursor: "pointer" }}
                    />
                  {/* </Tooltip> */}
                </PopoverTrigger>
                <PopoverContent bg="white">
                  <PopoverHeader fontWeight="semibold" fontSize="md">
                    Popover placement
                  </PopoverHeader>
                  <PopoverArrow  bg="white"/>
                  <PopoverCloseButton />
                  <PopoverBody fontSize="md" fontWeight="normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
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

  const continent = {
    slug,
  };

  return {
    props: {
      continent,
    },
    // redirect: 60 * 60, // 1 hour
  };
};
