import { UnlockIcon } from "@chakra-ui/icons"
import { redirect } from 'react-router-dom';
import {
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  AvatarBadge,
  Avatar,
  Link,
  Select
} from "@chakra-ui/react"

export default function Navbar() {
  const toast = useToast()

  return (
    <Flex as="nav" bg="white" alignItems="center" minH="95px">
      <Heading as="h1" fontSize="1.5em">Employee Dashboard</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Select placeholder='My Account' size={'sm'} w={'fit-content'} >
          <option value='c-password'>Change password</option>
        </Select>
        <Flex gap={4}>
          <Link href={'/'}
            onClick={() => toast({
              title: 'Logged out.',
              description: "Successfully logged out",
              duration: 10000,
              isClosable: true,
              position: 'top',
              status: 'success',
              icon: <UnlockIcon />,
              redirect: "/",
            })}
          >Logout</Link>
        </Flex>
      </HStack>
    </Flex>
  )
}
