import { Box, Flex, Button, Container, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from './Logo';

const NavLink = ({ to, children, onClick }) => (
  <Link to={to} style={{ color: 'inherit', textDecoration: 'none', width: '100%' }} onClick={onClick}>
    <Box 
      color="#1B3C5B"
      _hover={{ color: '#7BA7BC' }} 
      fontWeight="medium"
      py={2}
      width="100%"
    >
      {children}
    </Box>
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box 
      as="nav" 
      bg="white"
      py={2}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      boxShadow="sm"
      height="60px"
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" height="100%">
          <Link to="/">
            <Logo width={{ base: "120px", md: "200px" }} />
          </Link>

          {/* Menu Desktop */}
          <Flex 
            display={{ base: "none", md: "flex" }}
            align="center"
            gap={8}
          >
            <NavLink to="/">Início</NavLink>
            <NavLink to="/imoveis">Imóveis</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/contato">Contato</NavLink>
            <Button 
              bg="#1B3C5B"
              color="white"
              px={6}
              py={5}
              size="sm"
              _hover={{
                bg: '#7BA7BC',
                transform: 'translateY(-2px)',
                boxShadow: 'md',
              }}
              transition="all 0.2s"
            >
              Anunciar Imóvel
            </Button>
          </Flex>

          {/* Botão Menu Mobile */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="ghost"
            icon={<HamburgerIcon boxSize={6} />}
            aria-label="Abrir menu"
          />
        </Flex>
      </Container>

      {/* Menu Mobile */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader borderBottomWidth="1px" py={6}>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="stretch" pt={8}>
              <NavLink to="/" onClick={onClose}>Início</NavLink>
              <NavLink to="/imoveis" onClick={onClose}>Imóveis</NavLink>
              <NavLink to="/sobre" onClick={onClose}>Sobre</NavLink>
              <NavLink to="/contato" onClick={onClose}>Contato</NavLink>
              <Button 
                bg="#1B3C5B"
                color="white"
                size="lg"
                py={7}
                _hover={{
                  bg: '#7BA7BC'
                }}
              >
                Anunciar Imóvel
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
} 
