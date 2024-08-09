import { List, ListItem, ListIcon, Box, Flex, Text } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom"
import { Image } from '@chakra-ui/react'

import { useState } from "react"
import PolictManual from '../../dist/assets/CMHS_HR_book-6edd46fc-6edd46fc.pdf';
import HumanResourcePolicyManual from "./model/HumanResourcePolicyManual"

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(prev => !prev)

  return (
    <>

      {isOpen && <HumanResourcePolicyManual isOpen={isOpen} onClose={toggleModal} PdfFile={PolictManual} />}

      <Box as="aside" h="100vh" w="234px">
        <Flex flexFlow="column" gap={8}>
          <Box maxW='150px'>
            <Image src='https://www.cmhsma.org/portal/images/CMHS_logo2-2yzznp96yh6tvu9xzgyvi8.png' alt='Dan Abramov' />
          </Box>

          <List color={'#777'} fontSize="14px" spacing={2} bg="white" overflowY="auto" border='1px' borderColor='gray.200' p={2.5}>
            <Text as="h6" pb={1} mb={3} fontSize={"1.3em"} textTransform={"uppercase"} color={"#5a5a5a"} borderBottom={"1px"} borderColor={"#e7e7e7"} letterSpacing={".45px"}>Categories</Text>

            <ListItem>
              <NavLink to="/dashboard" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Dashboard</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="#" colorScheme="brand" onClick={toggleModal}>
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Human Resource Policy Manual</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>FY 24 Holiday Schedule</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Required Federal and MA Postings</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Request for Leave of Absence</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>CMHS Directory</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="clinicalconsultationform" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Clinical Consultation Form</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Clinical Consultation History</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Submit Travel Voucher</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Individual Aide Form</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>PayCheck Error Form</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>P.O. System</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Pretty Cash System</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Job Postings…</Text>
                </Flex>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="profile" colorScheme="brand">
                <Flex align="baseline">
                  <ListIcon as={ChevronRightIcon} color={'#777'} />
                  <Text as="span" flexGrow={'1'} _hover={{ 'bg': '#f5f5f5', 'color': '#262626'}}>Paylocity</Text>
                </Flex>
              </NavLink>
            </ListItem>

          </List>
        </Flex>
      </Box>
    </>
  )
}
