import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoCantina.png'
import {
    chakra,
    Image,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton
  } from "@chakra-ui/react";
  import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {

    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Cantine Geek</VisuallyHidden>
            </chakra.a>
            <HStack spacing={3}>
                <Image src={logo} boxSize="50px" />
                <chakra.h1 fontSize="xl" fontWeight="medium" ml="3">
                    Cantine Geek
                </chakra.h1>
            </HStack>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">
                <Link to="/addrecipe">Ajouter recette</Link>
              </Button>
              <Button variant="ghost">Modifier</Button>
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Home
                </Button>

                <Button w="full" variant="ghost">
                  Ajouter une recette
                </Button>
                <Button w="full" variant="ghost">
                  Modifier
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
    )
}

export default Header
