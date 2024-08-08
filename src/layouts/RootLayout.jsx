import { Box} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

// components
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

export default function RootLayout() {
  return (
    <Box>
        <Box  display="flex" justifyContent="space-between" z="99" maxW="1240px" mx="auto" px={3}
          pt={{ base: '5', md: '7', lg: '10' }} pb={1}>
          <Sidebar />
          <Box as="main" w="calc(100% - 260px)" display="flex" flexFlow="column" gap={8}>
            <Navbar />
            <Box p="1">
              <Outlet />
            </Box>
          </Box>
        </Box>
      <Footer />


      {/* <Container maxW="100%" bg="white" overflow="hidden">
      <Flex maxW="1200px" mx="auto" gap={10} mt={{base: '5' , lg: '12' }}>

      <Box as="aside" w="210px" flexShrink={0}
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="white"
        h="100vh"
        p={{ base: '5px', lg: '10px' }}>
        <Sidebar />
      </Box>


        <Box as="main">
        // colSpan={{ base: 6, lg: 4, xl: 5 }}
        <Navbar />
        <Box my={8} >

        </Box>
      </Box>
      </Flex>
      </Container> */}
    </Box>
  )
}
