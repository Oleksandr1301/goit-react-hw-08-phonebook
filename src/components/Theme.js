import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: `"Roboto", sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#5ae6d3',
        color: '#523221',
      },
    },
  },
  colors: {
    brand: {
      main: '#523221',
      creme: '#a18143',
      yellow: '#eec54b',
    },
  },
  components: {
    Button: {
      // Set the default color scheme to "blue"
      defaultProps: {
        variant: 'ghost',
      },
      // Set the default size to "md"
      sizes: {
        md: {
          fontSize: '26px',
          fontWeight: '500',
          px: 4,
          py: 7,
        },
      },
    },
  },
});

export default theme;
