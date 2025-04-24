import { Box, Container, SimpleGrid, Image, Text, Badge, Heading, Stack, Flex } from '@chakra-ui/react';
import { FaBed, FaShower, FaCar } from 'react-icons/fa';

const PropertyCard = ({ title, price, location, beds, baths, parking, image }) => (
  <Box 
    bg="white"
    borderRadius="2xl"
    overflow="hidden"
    boxShadow="lg"
    width="100%"
    maxW="400px"
    mx="auto"
    transition="all 0.3s"
    _hover={{
      transform: "translateY(-8px)",
      boxShadow: "2xl"
    }}
  >
    <Box position="relative">
      <Image 
        src={image} 
        alt={title} 
        w="100%"
        h={{ base: "250px", md: "200px" }}
        objectFit="cover"
      />
      <Badge
        position="absolute"
        top={4}
        right={4}
        bg="blue.500"
        color="white"
        fontSize={{ base: "md", md: "sm" }}
        px={4}
        py={2}
        borderRadius="full"
        fontWeight="medium"
      >
        Destaque
      </Badge>
    </Box>
    <Box p={{ base: 6, md: 5 }}>
      <Text 
        fontWeight="bold"
        fontSize={{ base: "xl", md: "lg" }}
        noOfLines={1}
        mb={3}
        color="gray.800"
      >
        {title}
      </Text>
      <Text 
        color="blue.600"
        fontSize={{ base: "2xl", md: "xl" }}
        fontWeight="bold" 
        mb={3}
      >
        R$ {price}
      </Text>
      <Text 
        color="gray.600"
        fontSize={{ base: "lg", md: "md" }}
        mb={4}
        noOfLines={1}
      >
        {location}
      </Text>
      <Flex 
        justify="space-between"
        color="gray.600"
        fontSize={{ base: "lg", md: "md" }}
      >
        <Flex align="center" gap={3}>
          <FaBed size={20} />
          <Text>{beds}</Text>
        </Flex>
        <Flex align="center" gap={3}>
          <FaShower size={20} />
          <Text>{baths}</Text>
        </Flex>
        <Flex align="center" gap={3}>
          <FaCar size={20} />
          <Text>{parking}</Text>
        </Flex>
      </Flex>
    </Box>
  </Box>
);

export default function FeaturedProperties() {
  const properties = [
    {
      title: "Casa Moderna em Condomínio",
      price: "850.000",
      location: "Jardim América",
      beds: 3,
      baths: 2,
      parking: 2,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
    },
    {
      title: "Apartamento com Vista para o Mar",
      price: "650.000",
      location: "Centro",
      beds: 2,
      baths: 2,
      parking: 1,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Casa de Campo",
      price: "920.000",
      location: "Condomínio Green Valley",
      beds: 4,
      baths: 3,
      parking: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <Box py={{ base: 12, md: 16 }} bg="gray.50">
      <Container maxW="container.lg" px={4}>
        <Heading 
          textAlign="center" 
          mb={{ base: 10, md: 12 }}
          fontSize={{ base: "3xl", md: "4xl" }}
          color="gray.800"
          fontWeight="bold"
        >
          Imóveis em Destaque
        </Heading>
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={{ base: 8, md: 6 }}
          justifyItems="center"
        >
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 