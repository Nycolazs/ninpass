import { useState } from "react";
import { Container, LogoImage } from "./Forms.styled";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

export function Forms(){
  const [ form, setForm ] = useState(false);

  return(
    <>
      <LogoImage src="/images/ninPASS.png" />
      <Container>
        <div className={form ? "login invisible" : "login"}>
          <LoginForm change={()=>setForm(!form)} />
        </div>
        <div className={form ? "register visible" : "register"}>
          <RegisterForm change={()=>setForm(!form)} />
        </div>
      </Container>
    </>
  );
}