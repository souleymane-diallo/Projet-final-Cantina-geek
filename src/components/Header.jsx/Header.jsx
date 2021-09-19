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
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Cantina Geek</VisuallyHidden>
            </chakra.a>
            <HStack>
                <Image src={logo} boxSize="50px" />
                <h1 className="logo">
                  Cantina Geek
                </h1>
            </HStack>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">
                <Link to="/" className="navLink">Accueil</Link>  
              </Button>
              <Button variant="ghost">
                <Link to="/addrecipe" className="navLink">Ajouter une Recette</Link>
              </Button>
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
                m={8}
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
                  <Link to="/" className="navLink">Accueil</Link>  
                </Button>

                <Button w="full" variant="ghost">
                 <Link to="/addrecipe" className="navLink">Ajouter une recette</Link> 
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
