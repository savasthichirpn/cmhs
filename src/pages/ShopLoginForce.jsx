'use client'
import React from 'react'
import {
    Flex,
    Box,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    Link
} from '@chakra-ui/react'
import { useState } from 'react'
import { HidePassword, ShowPassword } from '../helper/SvgIcons'
import { loginValidation } from '../helper/Messages'
import { object,string} from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom'

export default function ShopLoginForce() {

    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validationSchema = object().shape({
        email: string().trim().required(loginValidation.emailRequired).email(loginValidation.emailInvalid),
        password: string().trim().required(loginValidation.passwordRequired).matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            loginValidation.passwordInvalid
        )

    });
    const {
        register: loginCredential,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validationSchema) });

    const onSubmit = async (data) => {
        // event.preventDefault();
        setIsLoading(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            // const formData = await data.response.json(data);
            navigate('/dashboard');
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} flexFlow={'column'} gap={'8'}>
            <Box maxW='150px'>
                <Image src='https://www.cmhsma.org/portal/images/CMHS_logo2-2yzznp96yh6tvu9xzgyvi8.png' alt='Dan Abramov' />
            </Box>
            <Flex align={'center'} justify={'center'}>
                <Stack spacing={4} mx={'auto'} w={'750px'} p={6} border={'1px solid #ddd'}>
                    <Stack align={'left'}>
                        <Text fontSize={'1.5rem'} color={'#777'} textAlign={'center'} fontFamily={'Open Sans'} fontWeight={'700'} textTransform={'uppercase'}>
                            Employee Login
                        </Text>
                    </Stack>

                    <Box border={'1px solid #ddd'} boxShadow={'lg'} px={8} py={10}>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            <Flex direction={'column'} gap={5} justify={'center'}>
                                <Flex width={'full'} direction={'column'}>
                                    <label >Email address</label>
                                    <Input {...loginCredential('email')} width={'full'} mt={'4px'} height={'44px'} type="email" name={'email'}
                                        fontSize={{ 'base': 'sm', 'md': 'md' }}
                                        color={'text.grey-4'} borderRadius={'4px'}
                                    />
                                    {errors?.email && (
                                        <Box as="p" className="error-css" color={'red'} fontSize={'14px'}>{errors?.email?.message}</Box>
                                    )}
                                </Flex>

                                <Flex position={'relative'} width={'full'} direction={'column'}>
                                    <label>Password</label>
                                    <Input {...loginCredential('password')}
                                        width={'full'} height={'44px'} mt={'4px'} type={showPassword ? 'text' : 'password'} name={'password'}
                                        color={'text.grey-4'} borderRadius={'4px'}
                                    />
                                    {
                                        showPassword ?
                                            <Box onClick={() => setShowPassword(false)}
                                                zIndex={1} position={'absolute'} top={9} right={4} cursor={'pointer'} userSelect={'none'}>
                                                <HidePassword />
                                            </Box> : <Box onClick={() => setShowPassword(true)}
                                                zIndex={1} position={'absolute'} top={9} right={4} cursor={'pointer'} userSelect={'none'}>
                                                <ShowPassword />
                                            </Box>
                                    }
                                    {errors?.password && (
                                        <Box as="p" className="error-css" color={'red'} fontSize={'14px'}>{errors?.password?.message}</Box>
                                    )}
                                </Flex>
                                <Box fontWeight={400} textAlign={'right'} mt={'-10px'} fontSize={{ 'base': 'sm', 'md': '14px' }} color={'blue.600'}
                                    cursor={'pointer'}
                                    _hover={{ textDecoration: 'underline' }}>
                                    {` Forgot Password?`}
                                </Box>
                                <Box width={'full'} height={'40px'} mt={6}>
                                    <Button width={'full'} type={'submit'}
                                    color={'white'} fontWeight={700} mt={3} _hover={{'opacity' : '0.8'}}
                                        fontSize={'15px'} bg={'#5a5a5a'}
                                        borderRadius={'4px'}>
                                        {
                                            isLoading ? 'Loading...' : 'Login'
                                        }
                                    </Button>
                                </Box>
                            </Flex>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
    )
}
