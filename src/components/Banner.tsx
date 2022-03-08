import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
export function Banner() {
  return (
    <Flex
      bgImage="url('/images/bgHome.jpg')"
      bgSize="cover"
      h="335"
      gap="4"
      p="6"
      justifyContent="center"
    >
      <Flex
        w="100%"
        my="6"
        maxWidth={1240}
        mx="auto"
        px="6"
        justifyContent="space-between"
        alignContent="center"
        position="relative"
      >
        <Flex flexDirection="column" justifyContent="center">
          <Text
            fontSize={["3xl","4xl"]}
            color="white"
            mb="4"
            // maxW={["100%", "100%", "100%", "400px"]}
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize={["md","larger"]} color="white" maxW="500px">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Flex>
        <Image
          src="/images/airplane.svg"
          alt="Airplane image"
          w={["200px", "200px", "300px", "417px"]}
          mb="-32"
          display={["none", "none", "block"]}
        />
      </Flex>
    </Flex>
  );
}
