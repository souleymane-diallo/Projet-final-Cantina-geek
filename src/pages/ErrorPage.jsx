import React from 'react';
import { Flex, Stack, Image, Heading} from '@chakra-ui/react'
import error404 from '../images/Error404.png'

const ErrorPage = () => {
    return (
        <Flex>
            <Stack>
                <Heading align="center" mt={4}>Oups Cette Page n'exite pas</Heading>
                <Image src={error404} alt="Erreur 404" />
            </Stack>
        </Flex>
    )
}

export default ErrorPage
