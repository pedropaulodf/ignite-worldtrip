import { Box, Flex, Icon, IconButton, Image, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({showBackButton}: HeaderProps) {

  const router = useRouter();

  return (
    <Flex w="100%" my="6" maxWidth={1240} mx="auto" px="6" justifyContent="center" alignContent="center" position="relative">
      {showBackButton && (
        <Box aria-label="Back Button area"
          position="absolute"
          left="0"
          ml="4"
        >
          <Tooltip hasArrow placement='right' label='Voltar' bg='black.50' color='gray.300'>
            <IconButton
              aria-label="Back Button"
              icon={<Icon as={MdOutlineArrowBackIosNew} />}
              onClick={() => router.back()}
            />
          </Tooltip>
        </Box>
      )}
      <Image src="/images/logo.svg" alt="Logo" w="184" h="46" onClick={() => router.push('/')} _hover={{
        cursor: "pointer"
      }} />
    </Flex>
  )
}