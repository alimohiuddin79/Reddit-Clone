import { AuthModalState } from '@/src/atoms/authModalAtom';
import { border, Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from "recoil";

const SignUp:React.FC = () => {
    
    const setAuthModalState = useSetRecoilState(AuthModalState);
    
    const [signUpForm, setSignUpForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = () => {

    }

    return(
        <form action="" method='post' onSubmit={handleSubmit}>
            <Input 
                name='email'
                placeholder='email'
                type='email'
                onChange={handleChange}
                required
                mb={2}
                fontSize={'10pt'}
                _placeholder={{color: 'gray.500'}}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                bg='gray.50'
            />            
            <Input 
                name='password'
                placeholder='password'
                type='password'
                onChange={handleChange}
                required
                mb={2}
                fontSize={'10pt'}
                _placeholder={{color: 'gray.500'}}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                bg='gray.50'
            />
            <Input 
                name='confirmPassword'
                placeholder='confirm password'
                type='password'
                onChange={handleChange}
                required
                mb={2}
                fontSize={'10pt'}
                _placeholder={{color: 'gray.500'}}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                bg='gray.50'
            />
            <Button width={'100%'} height='30px' my={2} type="submit">Sign Up</Button>            
            <Flex fontSize={'9pt'} justifyContent='center'>
                <Text mr={1}>Already a redditor?</Text>
                <Text 
                    fontWeight={'700'} 
                    cursor='pointer' 
                    color={'blue.500'}
                    onClick={() => setAuthModalState( prev => ({
                        ...prev,
                        view: 'login'
                    }))}
                >LOGIN</Text>
            </Flex>
        </form>
    )
}
export default SignUp;