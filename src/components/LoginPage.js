import React, {useState} from 'react'
import * as Components from "./LoginPageComponents.js"
import { useSignInEmailPassword } from '@nhost/react'
import { useSignUpEmailPassword } from '@nhost/react'
import { Navigate } from 'react-router-dom'
import "./LoginPage.css"

function LoginPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [signIn, toggle] = useState(true);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signInEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } =
    useSignInEmailPassword()

  const { signUpEmailPassword,  } = useSignUpEmailPassword()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    signInEmailPassword(email, password)
  }

  const handleOnSubmitSignUp = (e) => {
    e.preventDefault()

    signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName
      }
    })
  }

  if (isSuccess) {
    return <Navigate to="/" replace={true} />
  }

  const disableForm = isLoading || needsEmailVerification
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleOnSubmitSignUp}>
          <Components.Title>Sign Up</Components.Title>
          {needsEmailVerification ? (
            <p className='verification-text'>Please Check Your Mailbox and Click on that Link</p>
          ) : (
            <>
              <Components.Input type='text' placeholder='First name' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={disableForm}
                required />
              <Components.Input type='text' placeholder='Last name' 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={disableForm}
                  required />
              <Components.Input type='email' placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disableForm}
              required />
              <Components.Input type='password' placeholder='Create Password' value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disableForm}
              required/>
              <Components.Button disabled={disableForm}>
              {isLoading ? "Loading..." : 'Create account'}

              </Components.Button>
              {isError ? <p>{error?.message}</p> : null}
            </>
          )}
        </Components.Form>
      </Components.SignUpContainer>


      {/* SignIn Form */}
      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleOnSubmit}>
          <Components.Title>Sign in</Components.Title>
          {needsEmailVerification ? (
            <p>Check Your MailBox and Click on that Link</p>
          ) : (
            <>
              <Components.Input type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={disableForm}
                required />
              <Components.Input type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={disableForm}
                required
              />
              <Components.Button disabled={disableForm}> {isLoading ? "loading..." : 'Sign in'}</Components.Button>
              {isError ? <p >{error?.message}</p> : null}

            </>
          )}
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>

          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep exploring, please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your details and start exploring NATURE with us.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>

    </Components.Container>
  )
}

export default LoginPage
