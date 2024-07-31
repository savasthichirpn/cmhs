import { UnlockIcon } from "@chakra-ui/icons"
import {
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  AvatarBadge,
  Avatar
} from "@chakra-ui/react"

export default function Navbar() {
  const toast = useToast()

  return (
    <Flex as="nav" bg="white" alignItems="center" minH="95px">
      <Heading as="h1" fontSize="1.5em">Employee Dashboard</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar name="mario" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>kevinylitalo@gmail.com</Text>
        <Button
          colorScheme="brand"
          onClick={() => toast({
            title: 'Logged out.',
            description: "Successfully logged out",
            duration: 10000,
            isClosable: true,
            position: 'top',
            status: 'success',
            icon: <UnlockIcon />,
          })}
        >Logout</Button>
      </HStack>
    </Flex>
  )
}
