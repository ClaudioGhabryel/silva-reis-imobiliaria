import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Footer from './components/Footer';

const theme = extendTheme({
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: '#F5F0EC',
      100: '#E6E9ED',
      200: '#C5D3DC',
      300: '#7BA7BC',
      400: '#5B8BA3',
      500: '#1B3C5B',
      600: '#15304A',
      700: '#102438',
      800: '#0B1827',
      900: '#050C15',
    },
    background: {
      light: '#F5F0EC'
    }
  },
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
      },
      'html, body': {
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        backgroundColor: 'white'
      },
      '#root': {
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }
  },
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.lg'
      }
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh" display="flex" flexDirection="column">
          <Navbar />
          <Box flex="1">
            <Hero />
            <FeaturedProperties />
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
