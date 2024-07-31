import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

export default function Dashboard() {
  const tasks = useLoaderData()
  console.log(tasks)

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px" borderColor="brand.400" bg="white">
          <CardHeader color="gray.700">
            <Flex gap={5}>
              <Box size="50px">
                <Avatar name={task.author} src={task.img} />
              </Box>
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color="gray.500">
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor="gray.200" />

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3002/tasks')
  return res.json()
}

/*
import express, { Request, Response } from 'express';
const app = express();
app.get('/', (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.headers.origin && ['http://localhost:3000', 'http://localhost:3001'].includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  }
  res.send('Hello World!');
});
app.listen(3000);*/
