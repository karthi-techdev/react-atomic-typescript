import { Col, Row } from "react-bootstrap"
import { InputGroup } from "../molecules/InputGroup"
import { HeadingGroup } from "../molecules/HeadingGroup"
import { ButtonGroup } from "../molecules/ButtonGroup"
import { MainGroup } from "../molecules/MainGroup"
import { useState } from "react"

const ResetPasswordOrganisms = () => {
  type FormData = {
    setPass: string,
    repeatPass: string,
    error?: string,
  }

  type FormDataError = {
    setPass?: string,
    repeatPass?: string,
  }

  const [userData, setUserData] = useState<FormData>({
    setPass: "",
    repeatPass: "",
  })

  const [userDataError, setUserDataError] = useState<FormDataError>({})

  const validateReset=()=> {
    const error:FormDataError = {};
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;


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

    validateReset()
  }

  return (
    <Row className="align-items-center h-100dvh">
        <Col>
            <MainGroup title="Fast, Efficient and Productive" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam dignissimos, itaque eveniet vitae! Ipsa, eligendi." />
        </Col>

        <Col>
            <form action="" className="px-4 py-5">
                <HeadingGroup title="Reset Password" text="Enter you New Password" />

                <InputGroup onChange={handleInput} value={userData.setPass} error={userDataError.setPass} labelName="Set Password" type="password" name="setPass" />

                <InputGroup onChange={handleInput} value={userData.repeatPass} error={userDataError.repeatPass} labelName="Repeat Password" type="password" name="repeatPass" />

                <ButtonGroup onClick={validateReset} buttonName="Reset Password" type="button" />
                
            </form>
        </Col>
    </Row>
  )
}

export default ResetPasswordOrganisms