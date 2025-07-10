import { Col, Row } from "react-bootstrap"
import { InputGroup } from "../molecules/InputGroup"
import { HeadingGroup } from "../molecules/HeadingGroup"
import { ButtonGroup } from "../molecules/ButtonGroup"
import { RedirectGroup } from "../molecules/RedirectGroup"
import { MainGroup } from "../molecules/MainGroup"
import { useState } from "react"

const SignInOrganisms = () => {
  type FormData = {
    email: string,
    pass: string,
    error?: string,
  }

  type FormDataError = {
    email?: string,
    pass?: string,
  }

  const [userData, setUserData] = useState<FormData>({
    email: "",
    pass: "",
  })

  const [userDataError, setUserDataError] = useState<FormDataError>({})

  const validateSignIn=()=> {
    const error:FormDataError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userData.email) {
      error.email = "Enter Your Email Address";
    } else if (!emailRegex.test(userData.email)) {
      error.email = "Enter a valid Email Address";
    } else {
      error.email = "";
    }

    if (!userData.pass) {
      error.pass = "Enter the Password";
    } else {
      error.pass = "";
    }

      setUserDataError(error)
  }

  const handleInput =(event: React.ChangeEvent<HTMLInputElement>)=> {
    const {name,value} = event.target
    setUserData({...userData,[name]: value})

    validateSignIn()
  }

  return (
    <Row className="align-items-center h-100dvh">
        <Col>
            <MainGroup title="Fast, Efficient and Productive" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam dignissimos, itaque eveniet vitae! Ipsa, eligendi." />
        </Col>

        <Col>
            <form action="" className="px-4 py-5">
                <HeadingGroup title="Sign In" text="Enter your Credentials to Login" />

                <InputGroup onChange={handleInput} value={userData.email} error={userDataError.email} labelName="Email" type="email" name="email" />

                <InputGroup onChange={handleInput} value={userData.pass} error={userDataError.pass} labelName="Password" type="password" name="pass" />

                <ButtonGroup onClick={validateSignIn} buttonName="Sign In" type="button" />

                <RedirectGroup context="Forgot Password?" linkName="Click here" linkUrl="/resetpassword" />

                <RedirectGroup context="Don't have an Account?" linkName="Sign Up" linkUrl="/" />
                
            </form>
        </Col>
    </Row>
  )
}

export default SignInOrganisms