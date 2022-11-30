import { Container, LogoImage } from "./Forms.styled";
import { LoginForm } from "./LoginForm/LoginForm";

export function Forms(){
  return(
    <>
      <Container>
        <LogoImage src="/images/ninPASS.png" />
        <LoginForm />
      </Container>
    </>
  );
}