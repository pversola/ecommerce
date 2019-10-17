import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import { SignInSignAndUpContainer } from './sign-in-and-sign-up.styles'

const SignInAndSignUpPage = () => (
    <SignInSignAndUpContainer>
        <SignIn />
        <SignUp />
    </SignInSignAndUpContainer>
)

export default SignInAndSignUpPage