import { Box, Container, SimpleGrid, Stack, Text, Heading, Link, Flex } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box bg="blue.600" color="white" py={16}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {/* Sobre */}
          <Stack spacing={4}>
            <Heading size="md" fontFamily="'Playfair Display', serif">
              Silva Reis Imóveis
            </Heading>
            <Text>
              Há mais de 20 anos no mercado imobiliário, oferecendo as melhores oportunidades em imóveis para nossos clientes.
            </Text>
          </Stack>

          {/* Contato */}
          <Stack spacing={4}>
            <Heading size="md">Contato</Heading>
            <Stack spacing={2}>
              <Flex align="center" gap={2}>
                <FaPhone />
                <Text>(11) 9999-9999</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <FaWhatsapp />
                <Text>(11) 99999-9999</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <FaEnvelope />
                <Text>contato@silvareisimoveis.com.br</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <FaMapMarkerAlt />
                <Text>Av. Principal, 1000 - Centro</Text>
              </Flex>
            </Stack>
          </Stack>

          {/* Links Rápidos */}
          <Stack spacing={4}>
            <Heading size="md">Links Rápidos</Heading>
            <Link>Início</Link>
            <Link>Imóveis</Link>
            <Link>Sobre Nós</Link>
            <Link>Contato</Link>
            <Link>Política de Privacidade</Link>
          </Stack>

          {/* Redes Sociais */}
          <Stack spacing={4}>
            <Heading size="md">Redes Sociais</Heading>
            <Stack direction="row" spacing={4}>
              <Link href="#" fontSize="2xl">
                <FaFacebook />
              </Link>
              <Link href="#" fontSize="2xl">
                <FaInstagram />
              </Link>
              <Link href="#" fontSize="2xl">
                <FaWhatsapp />
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderColor="whiteAlpha.300" mt={12} pt={8}>
          <Text textAlign="center">
            © {new Date().getFullYear()} Silva Reis Imóveis. Todos os direitos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
} 