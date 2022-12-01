import { useContext, useState } from "react";
import { Container, LogoImage } from "./Forms.styled";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

export function Forms(){
  const [ zelda, setZelda ] = useState(false);

  return(
    <>
      <Container>
        <div className={zelda ? "login invisible" : "login"}>
          <LogoImage src="/images/ninPASS.png" />
          <LoginForm />
        </div>
        <div className={zelda ? "register" : "register visible"}>
          <LogoImage src="/images/ninPASS.png" className=""/>
          <RegisterForm />
        </div>
        <button onClick={()=>setZelda(!zelda)}>Zelda</button>
      </Container>
    </>
  );
}