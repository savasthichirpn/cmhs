import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/open-sans'

const theme = extendTheme({
    fonts: {
        body: `'Open Sans', sans-serif`,
    },

    colors : {
        brand: {
            900: '#024fc9',
            800: '#146af5',
            700: '#2977f2',
            600: '#337df2',
            500: '#4287f5',
            400: '#50a7dc'
        },
    }

})

export default theme