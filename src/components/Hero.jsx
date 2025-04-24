import { Box, Container, Heading, Text, Input, Select, Button, Stack, Flex } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH="100vh"
      position="relative"
      mt="60px"
    >
      {/* Overlay escuro */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.6)"
      />

      {/* Conteúdo */}
      <Container 
        maxW="container.lg" 
        height="100%"
        px={4}
      >
        <Flex 
          direction="column" 
          justify="center"
          align="center"
          minH="calc(100vh - 60px)"
          py={8}
          textAlign="center"
        >
          <Box 
            w="100%"
            maxW={{ base: "100%", md: "500px" }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              mb={4}
              color="white"
              fontWeight="bold"
              lineHeight="1.2"
            >
              Encontre o Imóvel dos Seus Sonhos
            </Heading>
            <Text 
              fontSize={{ base: "md", md: "lg" }}
              mb={6}
              color="white"
            >
              As melhores ofertas de imóveis em toda a região
            </Text>

            {/* Formulário de busca */}
            <Box 
              bg="rgba(0, 0, 0, 0.8)"
              backdropFilter="blur(10px)"
              p={4}
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              <Stack spacing={4}>
                <Stack spacing={4} direction={{ base: "column", md: "row" }}>
                  <Select 
                    placeholder="Tipo"
                    size="lg"
                    bg="whiteAlpha.200"
                    color="white"
                    borderColor="whiteAlpha.400"
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{ borderColor: "blue.400" }}
                    _placeholder={{ color: "whiteAlpha.700" }}
                  >
                    <option value="casa">Casa</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="terreno">Terreno</option>
                  </Select>
                  <Select 
                    placeholder="Finalidade"
                    size="lg"
                    bg="whiteAlpha.200"
                    color="white"
                    borderColor="whiteAlpha.400"
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{ borderColor: "blue.400" }}
                    _placeholder={{ color: "whiteAlpha.700" }}
                  >
                    <option value="comprar">Comprar</option>
                    <option value="alugar">Alugar</option>
                  </Select>
                </Stack>
                <Input 
                  placeholder="Digite o bairro ou cidade"
                  size="lg"
                  bg="whiteAlpha.200"
                  color="white"
                  borderColor="whiteAlpha.400"
                  _hover={{ borderColor: "whiteAlpha.500" }}
                  _focus={{ borderColor: "blue.400" }}
                  _placeholder={{ color: "whiteAlpha.700" }}
                />
                <Button 
                  colorScheme="blue"
                  size="lg"
                  w="100%"
                  fontSize="md"
                  fontWeight="bold"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg"
                  }}
                  transition="all 0.2s"
                >
                  Buscar Imóveis
                </Button>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
} 