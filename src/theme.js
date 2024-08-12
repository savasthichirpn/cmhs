import { extendTheme } from '@chakra-ui/react';
import '@fontsource/open-sans'; // Ensure the font name is correct

const theme = extendTheme({
    fonts: {
        heading: `'Open Sans', sans-serif`, // Use 'Open Sans' for headings
        body: `'Open Sans', sans-serif`, // Use 'Open Sans' for body text
    },
    colors: {
        brand: {
            900: '#024fc9',
            800: '#146af5',
            700: '#2977f2',
            600: '#337df2',
            500: '#4287f5',
            400: '#50a7dc',
        },
    },
});

export default theme;
