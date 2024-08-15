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
    <div>Cards will be displayed later</div>
  )
}

export const tasksLoader = async () => {
  //const res = await fetch('http://localhost:3002/tasks')
  //return res.json()
  return 1
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
