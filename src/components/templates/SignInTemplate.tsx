import { Container} from "react-bootstrap"
import SignInOrganisms from "../organisms/SignInOrganisms"

const SignInTemplate = () => {
  return (
    <Container className="position-relative z-10000">
       <SignInOrganisms/>
    </Container>
  )
}

export default SignInTemplate