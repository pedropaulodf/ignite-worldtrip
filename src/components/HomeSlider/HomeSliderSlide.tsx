import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface HomeSliderSlideProps {
  title: string;
  subtitle: string;
  imageUrlName: string;
  slug: string;
}

export function HomeSliderSlide({
  imageUrlName,
  subtitle,
  title,
  slug
}: HomeSliderSlideProps) {
  return (
    <>
      <Flex position="absolute" flexDir="column" zIndex={3}>
        <Text fontSize={["3xl","5xl"]} fontWeight="700" color="white.50" zIndex={3}>
          {title}
        </Text>
        <Text fontSize={["lg","2xl"]} fontWeight="700" color="#dadada" zIndex={3}>
          {subtitle}
        </Text>
        <Flex justifyContent="center">
          <Link href={`/continent/${slug}`} passHref>
            <Button variant="outline" colorScheme="blue" color="white" mt="6" _hover={{backgroundColor: "#ffffff50"}} width="fit-content">
              Conhecer
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Image src={imageUrlName} alt={title} />
    </>
  );
}
