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
  Avatar,
  Img
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

export default function Dashboard() {
  const tasks = useLoaderData()
  console.log(tasks)

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map((task, index) => {
        return (
          <Card key={index} borderRadius={'0'} borderTop="8px" borderColor="brand.400" boxShadow='md' border={'0px'} bg="white" >
              <Flex gap={5} flexFlow={'column'} p={8}>
              <Flex justifyContent={'center'} alignItems={'center'} borderRadius={'full'} bg={task.color} boxSize='90px'>
                  <Img  maxW={'55px'} src={task.img} alt=''/>
                </Flex>
                <Box>
                <Heading as="h3" fontSize={'24px'} fontWeight={'700'} mt={4} fontFamily={'open Sans'} color={'#000'}>{task.title}</Heading>
                <Heading as="h4" fontSize={'18px'} fontWeight={'700'} mt={3} fontFamily={'open Sans'} color={'#000'}>{task.info}</Heading>
                </Box>
              </Flex>
          </Card>
        )
      })
      }
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
