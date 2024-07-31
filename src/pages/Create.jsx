import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Checkbox
} from '@chakra-ui/react'
import { Form, redirect } from 'react-router-dom'

export default function Create() {

  return (
    <Box p={4} border='1px' borderColor='gray.200'>
      <Form method="post" action="/create">

        <FormControl isRequired mb={6}>
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" />
          {/* <FormHelperText>Enter a descriptive task name.</FormHelperText> */}
        </FormControl>

        <FormControl isRequired mb={6}>
          <FormLabel>Individual:</FormLabel>
          <Input type="text" name="individual" />
          {/* <FormHelperText>Enter your name.</FormHelperText> */}
        </FormControl>

        <FormControl mb={6}>
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for your task..."
            name="description"
            type="sm"
            rows="4"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb={6}>
          <Checkbox
            name="isPriority"
            colorScheme="purple"
            size="lg"
          />
          <FormLabel mb="0" ml="10px">Make a priority task</FormLabel>
        </FormControl>

        <Button type="submit" mt={5}>Submit</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }

  console.log(task)

  return redirect('/')
}
