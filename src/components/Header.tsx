import { Box, Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({showBackButton}: HeaderProps) {

  const router = useRouter();

  return (
    <Flex w="100%" my="6" maxWidth={1440} mx="auto" px="6" justifyContent="center" alignContent="center" position="relative">
      {showBackButton && (
        <Box aria-label="Back Button area"
          position="absolute"
          left="0"
        >
          <IconButton
            aria-label="Back Button"
            icon={<Icon as={MdOutlineArrowBackIosNew} />}
            onClick={() => router.back()}
          />
        </Box>
      )}
      <Image src="/images/logo.svg" alt="Logo" w="184" h="46" />
    </Flex>
  )
}