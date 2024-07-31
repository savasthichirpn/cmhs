import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Textarea,
    Button,
    Checkbox,
    Heading,
    Select,
    SimpleGrid,
    Text,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import { Form, redirect } from 'react-router-dom'
import { SingleDatepicker } from 'chakra-dayzed-datepicker'

import TimePicker from 'react-time-picker'
import React, { useState } from 'react'
import Moment from 'moment'
import TimePickerComponent from '../components/TimePickerComponent';




export default function ClinicalConsultationForm() {

    const [curdate, setDate] = useState(new Date())
    const [timeval, onChange] = useState('10:00');

    return (

        <Box p={4} border='1px' borderColor='gray.200'>

            <Box>
                <Heading as="h2" pb={1} mb={2.5} size={"lg"} fontSize={"18px"} fontWeight={'500'} color={"#5a5a5a"}>CLINICAL CONSULTATION FORM</Heading>
                <Text as="p" color="#777" fontSize="14px" borderBlock={"1px solid #e7e7e7"} py={3}>
                    Information regarding an individual's medical or behavioral status that you feel needs to be reported to the Clinical/Medical Team should be documented using this form. Clinical Consultation Forms should be forwarded for minor to potentially significant health or behavioral concerns. As always, serious health concerns require immediate notification to a supervisor.
                </Text>
                <Text as="p" width={'fit-content'} ml={'auto'} fontSize={"13px"} color={'#900'} fontStyle={'italic'}>* Denotes required fields.</Text>
            </Box>

            <Box pt={7}>
                <Form method="post" action="/clinicalconsult">
                    <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                        <GridItem>
                            <FormControl isRequired>
                                <FormLabel mb={2}>Individual</FormLabel>
                                <Input type="text" name="individual" id="individual" placeholder="enter your name" />
                            </FormControl>
                        </GridItem>

                        <GridItem>
                            <FormControl isrequired>
                                <FormLabel mb={2}>Pick a date</FormLabel>
                                <Input type="date" name="date" id="date" />
                                {/* <SingleDatepicker
                                w="100%"
                                name="date-input"
                                date={curdate}
                                onDateChange={setDate}
                            /> */}
                            </FormControl>
                        </GridItem>

                        <GridItem>
                            <FormControl isrequired>
                                <FormLabel mb={2}>Pick a time</FormLabel>
                                <Input type='time' name='time' id='time' />
                                {/* <TimePickerComponent /> */}
                            </FormControl>
                        </GridItem>

                        <GridItem>
                            <FormControl isrequired>
                                <FormLabel mb={2}>Location</FormLabel>
                                <Select placeholder='select location' name="location">
                                    <option value="">Select Location</option>
                                    <option value='oakdale@cmhs.us'>120A Oakdale Street</option>
                                    <option value='1414dw@cmhs.us'>1414 Dartmouth Woods</option>
                                    <option value='Angelica@cmhs.us'>197A Bryant Lane</option>
                                    <option value='22DCarriage@cmhs.us'>22DCarriage</option>
                                    <option value='413dw@cmhs.us'>413 Dartmouth Woods</option>
                                    <option value='50ACarriagedr@cmhs.us'>50A Carriage Drive</option>
                                    <option value='58BCarriage@cmhs.us'>58B Carriage Drive</option>
                                    <option value='915dw@cmhs.us'>915 Dartmouth Woods</option>
                                    <option value='Emeralddrive@cmhs.us'>EmeraldDr</option>
                                    <option value='Fisher@cmhs.us'>Fisher</option>
                                    <option value='hixville@cmhs.us'>Hixville</option>
                                    <option value='Loftus@cmhs.us'>Loftus</option>
                                    <option value='mcgee@cmhs.us'>Mcgee</option>
                                    <option value='Plymouth@cmhs.us'>Plymouth</option>
                                    <option value='Russells@cmhs.us'>Russells Mills</option>
                                    <option value='washington@cmhs.us'>Washington Street</option>
                                    <option value='wildwood@cmhs.us'>Wildwood</option>
                                    <option value='Woodcock@cmhs.us'>Woodcock</option>
                                </Select>
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormControl isrequired>
                                <FormLabel mb={2}>Submitted By</FormLabel>
                                <Input type="text" name="submittedby" placeholder="enter your names" />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormLabel mb={2}>Observation (Check all that apply)</FormLabel>
                            <SimpleGrid columns={3} spacing={3}>
                                <GridItem>
                                    <FormControl display="flex" alignItems="center">
                                        <Checkbox
                                            name="pain"
                                            size="md"
                                            colorScheme="purple"
                                        />
                                        <FormLabel mb="0" ml="10px">Pain</FormLabel>
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl display="flex" alignItems="center">
                                        <Checkbox
                                            name="skin"
                                            size="md"
                                            colorScheme="purple"
                                        />
                                        <FormLabel mb="0" ml="10px">Skin Integrity</FormLabel>
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl display="flex" alignItems="center">
                                        <Checkbox
                                            name="Fall"
                                            size="md"
                                            colorScheme="purple"
                                        />
                                        <FormLabel mb="0" ml="10px">Fall</FormLabel>
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl display="flex" alignItems="center">
                                        <Checkbox
                                            name="Edema"
                                            size="md"
                                            colorScheme="purple"
                                        />
                                        <FormLabel mb="0" ml="10px">Edema/Swelling</FormLabel>
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl display="flex" alignItems="center">
                                        <Checkbox
                                            name="Fever"
                                            size="md"
                                            colorScheme="purple"
                                        />
                                        <FormLabel mb="0" ml="10px">Fever</FormLabel>
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl display="flex" alignItems="center">
                                        <Checkbox
                                            name="Ambulation"
                                            size="md"
                                            colorScheme="purple"
                                        />
                                        <FormLabel mb="0" ml="10px">Change In Gait/Ambulation</FormLabel>
                                    </FormControl>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel mb={2}>Describe Issue & Staff Actions Taken (e.g. Whether PRN administered vitals taken supervisor/EOC contacted etc.)</FormLabel>
                                <Textarea
                                    placeholder="Enter a detailed description for your consultation..."
                                    name="description"
                                    type="sm"
                                    rows="3"
                                />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <Button type="submit" name="btnsubmit" >Submit Okay</Button>
                        </GridItem>
                    </Grid>
                </Form>
            </Box>
        </Box>

    )
}
