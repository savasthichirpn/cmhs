import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Grid, Heading, Input, Text, CheckboxGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { leaveValidation, regex } from '../helper/Messages';

export default function LeaveRequest() {

    const [submitted, setSubmitted] = useState(false);

    // Define the validation schema
    const leaveValidationSchema = yup.object().shape({
        name: yup.string().required(leaveValidation.nameRequired),
        text: yup.string().required(leaveValidation.required),
        date: yup.date().required(leaveValidation.required).typeError(leaveValidation.dateInvalid),
        phone: yup.string().required(leaveValidation.phoneRequired).matches(regex.phoneRegex, leaveValidation.phoneInvalid),
        checkboxes: yup.array().of(yup.string()).min(1, leaveValidation.checkRequired),
        startDate: yup.date().required(leaveValidation.required).typeError(leaveValidation.dateInvalid),
        endDate: yup.date().required(leaveValidation.required).typeError(leaveValidation.dateInvalid),
        // extensionDate: yup.date().nullable(),
        extensionRequest: yup.boolean(), // Handle extension request checkbox
        benefits: yup.array().of(yup.string()), // Handle benefits checkboxes
        coverBenefits: yup.array().of(yup.string()), // Handle cover benefits checkboxes
        signatureEmployee: yup.string().required('Employee’s signature is required'),
        signatureSupervisor: yup.string().required('Supervisor’s signature is required'),
        hrDepartment: yup.string().required('HR Department is required')
    });

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(leaveValidationSchema)
    });

    // Handle form submission
    const leaveRequestSubmit = async (data) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
            console.log(data, "form-data");
            setSubmitted(true); // Set submitted state to true
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {submitted ? (
                <Box border={'1px solid #e7e7e7'} p={3} textAlign={'center'}>
                    <Heading as="h4" fontFamily={'Open Sans'} color={'#5a5a5a'} fontSize={'18px'} fontWeight={'500'}>
                        Thank you for your submission!
                    </Heading>
                    <Text fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} py={4}>
                        Your leave request has been successfully submitted. We will get back to you shortly.
                    </Text>
                </Box>
            ) : (
                <Box border={'1px solid #e7e7e7'} p={3}>
                    <Heading as="h4" fontFamily={'Open Sans'} color={'#5a5a5a'} fontSize={'18px'} fontWeight={'500'} borderBottom={'1px solid #e7e7e7'} py={2}>
                        REQUEST FOR LEAVE OF ABSENCE
                    </Heading>
                    <Text borderBlock={'1px solid #e7e7e7'} mt={4} textAlign={'end'} fontStyle={'italic'} pb={2} fontSize={'12px'} color={'#990000'} fontWeight={'400'} fontFamily={'Open Sans'}>
                        *Denotes required fields.
                    </Text>
                    <form onSubmit={handleSubmit(leaveRequestSubmit)}>
                        <Flex display={'flex'} flexFlow={'column'} gap={2} pt={2}>
                            {/* Employee Name */}
                            <FormControl isInvalid={!!errors.name} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='ename'>Employee Name*</FormLabel>
                                <Box w={'50%'}>
                                    <Input
                                        {...register('name')}
                                        id='ename'
                                        type='text'
                                        placeholder='Employee Name'
                                        fontSize={'14px'}
                                        color={'#777'}
                                        fontFamily={'Open Sans'}
                                    />
                                    {errors?.name && (
                                        < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.name?.message}</Box>
                                    )}
                                </Box>
                            </FormControl>



                            {/* Date */}
                            <FormControl isInvalid={!!errors.date} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>

                                <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='date'>Today Date*</FormLabel>
                                <Box w={'50%'}>
                                    <Input
                                        {...register('date')}
                                        id='date'
                                        type='date'
                                        placeholder='Today Date'
                                        fontSize={'14px'}
                                        color={'#777'}
                                        fontFamily={'Open Sans'}
                                    />
                                    {errors?.date &&
                                        < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.date?.message}</Box>
                                    }
                                </Box>

                            </FormControl>

                            {/* Address */}
                            <FormControl isInvalid={!!errors.text} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='address'>Address </FormLabel>
                                <Box w={'50%'}>
                                    <Input
                                        {...register('text')}
                                        id='address'
                                        type='text'
                                        placeholder='Address'
                                        fontSize={'14px'}
                                        color={'#777'}
                                        fontFamily={'Open Sans'}
                                    />
                                    {errors?.text && (
                                        < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.text?.message}</Box>
                                    )}
                                </Box>
                            </FormControl>

                            {/* Phone */}
                            <FormControl isInvalid={!!errors.phone} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='phone'>Phone</FormLabel>

                                <Box w={'50%'}>
                                    <Input
                                        {...register('phone')}
                                        id='phone'
                                        type='tel'
                                        placeholder='Phone'
                                        fontSize={'14px'}
                                        color={'#777'}
                                        fontFamily={'Open Sans'}
                                    />
                                    {errors?.phone && (
                                        < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.phone?.message}</Box>
                                    )}
                                </Box>
                            </FormControl>

                            {/* Checkboxes (Reasons for leave) */}
                            <FormControl isInvalid={!!errors.checkboxes}>
                                <FormLabel fontSize={'14px'} color={'#777'} fontWeight={'700'} fontFamily={'Open Sans'}>
                                    Reason for taking leave: (check one or more)
                                </FormLabel>
                                <Controller
                                    name="checkboxes"
                                    control={control}
                                    render={({ field }) => (
                                        <CheckboxGroup {...field}>
                                            <Grid alignItems={'start'} fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} templateColumns='repeat(2, 1fr)'>
                                                <Checkbox value='ownHealthCondition'><Box fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'}>My own serious health condition makes me unable to perform at least one of the essential functions of my job</Box></Checkbox>
                                                <Checkbox value='careChild'><Box fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'}>To care for my child after birth</Box></Checkbox>
                                                <Checkbox value='militaryLeave'><Box fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'}>Military leave</Box></Checkbox>
                                                <Checkbox value='personalLeave'><Box fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'}>Personal leave</Box></Checkbox>
                                                <Checkbox value='seriousHealthCondition'><Box fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'}>A serious health condition for</Box></Checkbox>
                                                <Checkbox value='spouse'><Box fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'}>Spouse</Box></Checkbox>
                                                <Checkbox value='parentInLaw'><Box fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'}>Parent-in-law</Box></Checkbox>
                                                <Checkbox value='domesticPartner'><Box fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'}>Domestic partner</Box></Checkbox>
                                            </Grid>
                                        </CheckboxGroup>
                                    )}
                                />
                                <Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>
                                    {errors?.checkboxes?.message}
                                </Box>
                            </FormControl>

                            {/* Start Date */}
                            <FormControl isInvalid={!!errors.startDate} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='startdate'>Date Leave is to start </FormLabel>
                                <Box w={'50%'}>
                                    <Input
                                        {...register('startDate')}
                                        id='startdate'
                                        type='date'
                                        placeholder='Date Leave is to start'
                                        fontSize={'14px'}
                                        color={'#777'}
                                        fontFamily={'Open Sans'}
                                    />
                                    {errors?.startDate && (
                                        < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.startDate?.message}</Box>
                                    )}
                                </Box>
                            </FormControl>

                            {/* End Date */}
                            <FormControl isInvalid={!!errors.endDate} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='enddate'>
                                    Date I expect to return to work
                                </FormLabel>
                                <Box w={'50%'}>
                                    <Input
                                        {...register('endDate')}
                                        id='enddate'
                                        type='date'
                                        placeholder='Date I expect to return to work'
                                        fontSize={'14px'}
                                        color={'#777'}
                                        fontFamily={'Open Sans'}
                                    />
                                    {errors?.endDate && (
                                        < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.endDate?.message}</Box>
                                    )}
                                </Box>
                            </FormControl>

                            {/* Extension Request */}
                            <FormControl isInvalid={!!errors.extensionDate} mt={2}>
                                <FormLabel fontSize={'14px'} color={'#777'} fontWeight={'700'} fontFamily={'Open Sans'}>
                                    Extension Request
                                </FormLabel>

                                <Flex justifyContent={'space-between'}>
                                    <Controller
                                        name="extensionRequest"
                                        control={control}
                                        render={({ field }) => (
                                            <Checkbox {...field} value={true}>
                                                <Box as="span" mt={'-2px'} display={'inline-block'} fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'}>
                                                    Extension request
                                                </Box>
                                            </Checkbox>
                                        )}
                                    />
                                    <Box w={'50%'}>
                                        <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='exdate'>Date of return expected</FormLabel>
                                        <Input
                                            {...register('endDate')}
                                            id='exdate'
                                            type='date'
                                            placeholder=''
                                            fontSize={'14px'}
                                            color={'#777'}
                                            fontFamily={'Open Sans'}
                                        />
                                        {errors?.endDate && (
                                            < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.endDate?.message}</Box>
                                        )}
                                    </Box>
                                </Flex>
                            </FormControl>

                            {/* Benefits */}
                            <FormControl>
                                <FormLabel fontSize={'14px'} color={'#777'} fontWeight={'700'} fontFamily={'Open Sans'}>
                                    Do you have benefits through CMHS
                                </FormLabel>
                                <Controller
                                    name="benefits"
                                    control={control}
                                    render={({ field }) => (
                                        <CheckboxGroup {...field}>
                                            <Grid alignItems={'start'} fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} templateColumns='repeat(2, 1fr)'>
                                                <Checkbox value='Health'>Health</Checkbox>
                                                <Checkbox value='Dental'>Dental</Checkbox>
                                                <Checkbox value='Short term disability'>Short term disability</Checkbox>
                                                <Checkbox value='Life'>Life</Checkbox>
                                                <Checkbox value='Accident'>Accident</Checkbox>
                                                <Checkbox value='Cancer'>Cancer</Checkbox>
                                            </Grid>
                                        </CheckboxGroup>
                                    )}
                                />
                            </FormControl>

                            {/* Cover Benefits */}
                            <FormControl>
                                <FormLabel fontSize={'14px'} color={'#777'} fontWeight={'700'} fontFamily={'Open Sans'}>
                                    How would you like to cover your benefits:
                                </FormLabel>
                                <Controller
                                    name="coverBenefits"
                                    control={control}
                                    render={({ field }) => (
                                        <CheckboxGroup {...field}>
                                            <Grid alignItems={'start'} fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} templateColumns='repeat(5, 1fr)'>
                                                <Checkbox value='Sick'>Sick</Checkbox>
                                                <Checkbox value='Vacation'>Vacation</Checkbox>
                                                <Checkbox value='Mail check to office'>Mail check to office</Checkbox>
                                            </Grid>
                                        </CheckboxGroup>
                                    )}
                                />
                            </FormControl>

                            <Text fontSize={'14px'} color={'#777'} fontWeight={'600'} fontFamily={'Open Sans'} py={2}>
                                *If you run out of benefit time you are responsible for mailing a check to the office for remaining amount weekly.
                            </Text>

                            {/* Employee’s Signature */}
                            <FormControl isInvalid={!!errors.signatureEmployee} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>

                                <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='signatureEmployee'>
                                    Employee’s Signature:
                                </FormLabel>
                                <Box w={'50%'}>
                                    <Input
                                        {...register('signatureEmployee')}
                                        id='signatureEmployee'
                                        type='text'
                                        fontSize={'14px'}
                                        color={'#777'}
                                        fontFamily={'Open Sans'}
                                    />
                                    {errors?.signatureEmployee && (
                                        < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.signatureEmployee?.message}</Box>
                                    )}
                                </Box>
                            </FormControl>

                            {/* Supervisor’s Signature */}
                            <FormControl isInvalid={!!errors.signatureSupervisor} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='signatureSupervisor'>
                                    Supervisor’s Signature
                                </FormLabel>

                                <Box w={'50%'}>
                                    <Input
                                        {...register('signatureSupervisor')}
                                        id='signatureSupervisor'
                                        type='text'
                                        fontSize={'14px'}
                                        color={'#777'}
                                        fontFamily={'Open Sans'}
                                    />
                                    {errors?.signatureSupervisor && (
                                        < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.signatureSupervisor?.message}</Box>
                                    )}
                                </Box>
                            </FormControl>

                            {/* Human Resource Department */}
                            <FormControl isInvalid={!!errors.hrDepartment} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <FormLabel fontSize={'14px'} color={'#777'} fontFamily={'Open Sans'} htmlFor='hrDepartment'>
                                    Human Resource Department
                                </FormLabel>
                                <Box w={'50%'}>
                                    <Input
                                        {...register('hrDepartment')}
                                        id='hrDepartment'
                                        type='text'
                                        fontSize={'14px'}
                                        color={'#777'}
                                        fontFamily={'Open Sans'}
                                    />
                                    {errors?.hrDepartment && (
                                        < Box as='p' className="error-css" fontFamily={'Open Sans'} color={'red'} fontSize={'12px'}>{errors?.hrDepartment?.message}</Box>
                                    )}
                                </Box>
                            </FormControl>

                            {/* Submit Button */}
                            <Button size='sm' type='submit' width={'fit-content'} bg={'#777'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                                Submit
                            </Button>
                        </Flex>
                    </form>
                </Box>
            )}
        </div>
    );
}
