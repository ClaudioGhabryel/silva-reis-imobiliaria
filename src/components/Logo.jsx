import { Box, Image } from '@chakra-ui/react';

export default function Logo({ width = "150px", height = "50px" }) {
  return (
    <Box w={width} h={height} display="flex" alignItems="center">
      <Image 
        src="/logo.png"
        alt="Silva Reis Imóveis"
        maxH="100%"
        maxW="100%"
        objectFit="contain"
        loading="eager"
      />
    </Box>
  );
} 