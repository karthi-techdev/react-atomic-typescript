import { Col, Row } from "react-bootstrap"
import { InputGroup } from "../molecules/InputGroup"
import { HeadingGroup } from "../molecules/HeadingGroup"
import { ButtonGroup } from "../molecules/ButtonGroup"
import { RedirectGroup } from "../molecules/RedirectGroup"
import { MainGroup } from "../molecules/MainGroup"
import { useState } from "react"

const SignUpOrganisms = () => {

  type FormData = {
    email: string,
    setPass: string,
    repeatPass: string,
    error?: string,
  }

  type FormDataError = {
    email?: string,
    setPass?: string,
    repeatPass?: string,
  }

  const [userData, setUserData] = useState<FormData>({
    email: "",
    setPass: "",
    repeatPass: "",
  })

  const [userDataError, setUserDataError] = useState<FormDataError>({})
  
  const validateSignUp=()=> {
    const error:FormDataError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

    if (!userData.email) {
      error.email = "Enter Your Email Address";
    } else if (!emailRegex.test(userData.email)) {
      error.email = "Enter a valid Email Address";
    } else {
      error.email = "";
    }

    if (!userData.setPass) {
      error.setPass = "Enter the Password";
    } else if (!passwordRegex.test(userData.setPass)) {
      error.setPass = "Password must be at least 8 characters, include one uppercase letter, one number, and one special character";
    } else {
      error.setPass = "";
    }

    if (!userData.repeatPass) {
      error.repeatPass = "Enter the Same Password";
    } else if (userData.setPass !== userData.repeatPass) {
      error.repeatPass = "Passwords do not match";
    } else {
      error.repeatPass = "";
    }

      setUserDataError(error)
  }

  const handleInput =(event: React.ChangeEvent<HTMLInputElement>)=> {
    const {name,value} = event.target
    setUserData({...userData,[name]: value})

    validateSignUp()
  }

  return (
    <Row className="align-items-center h-100dvh">
        <Col>
            <MainGroup title="Fast, Efficient and Productive" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam dignissimos, itaque eveniet vitae! Ipsa, eligendi." />
        </Col>

        <Col>
            <form action="" className="px-4 py-5">
            <HeadingGroup title="Sign Up" text="Enter you Details" />

            <InputGroup onChange={handleInput} error={userDataError.email} value={userData.email} labelName="Email" type="email" name="email" />

            <InputGroup onChange={handleInput} error={userDataError.setPass} value={userData.setPass} labelName="Password" type="password" name="setPass" />

            <InputGroup onChange={handleInput} error={userDataError.repeatPass} value={userData.repeatPass} labelName="Repeat Password" type="password" name="repeatPass" />

            <ButtonGroup buttonName="Sign Up" type="button" onClick={validateSignUp}/>

            <RedirectGroup context="Already have an Account?" linkName="Sign In" linkUrl="/signin" />
            </form>
        </Col>
    </Row>
  )
}

export default SignUpOrganisms