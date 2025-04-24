import { Image } from '@chakra-ui/react';

export default function Logo({ width = "200px" }) {
  return (
    <Image
      src="/logo.png"
      alt="Silva Reis Imóveis"
      width={width}
      style={{
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    />
  );
} 