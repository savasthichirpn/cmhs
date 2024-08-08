import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, List, ListItem, Divider, Center } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box bg={'#ededed'} borderTop={'8px solid #ccc'} >
            <Box maxW={'1240px'} mx={'auto'} w={'full'}>
                <Box px={4} pt={8} pb={{ base: '10' }}>
                    <List display={'flex'}  width={'100%'} justifyContent={'end'} ms={'auto'} gap={2} marginLeft={'auto'}>
                        <ListItem borderRight={'2px solid #77777773'} color={'#777'} pe={1.5} >
                            <Link href={'/'}>Home</Link>
                        </ListItem>
                        <ListItem borderRight={'2px solid #77777773'} color={'#777'} pe={1.5}>
                            <Link href={'/'}>About</Link>
                        </ListItem>
                        <ListItem borderRight={'2px solid #77777773'} color={'#777'} pe={1.5}>
                            <Link href={'/'}>Contact</Link>
                        </ListItem>
                        <ListItem color={'#777'}>
                            <Link href={'/'}>Search</Link>
                        </ListItem>
                    </List>
                    <Flex color={'#777'} fontSize={'12px'} fontFamily={'open sans'} textAlign={'center'} >
                        Administrative Office<br/>
                        331R State Road<br/>
                        N. Dartmouth, MA 02747<br/>
                        (508) 999-2906
                    </Flex>
                </Box>
                <Box color={'#777'} fontSize={'14px'} fontFamily={'open sans'} textAlign={'Center'} py={2}>
                    Copyright © 2022 ~ CHMS, Inc. ~ All rights reserved.
                </Box>
            </Box>
        </Box>

    );
};
