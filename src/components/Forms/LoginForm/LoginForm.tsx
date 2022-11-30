import { LoginContainer } from './LoginForm.styled';
import EmailInput from '../ItensForm/EmailInput/EmailInput';
import PasswordInput from './../ItensForm/PasswordInput/PasswordInput';
import { useState } from 'react';
import RememberCheckbox from '../ItensForm/RememberCheckbox/RememberCheckbox';
import LoginButton from '../ItensForm/LoginButton/LoginButton';
import GoogleButton from '../ItensForm/GoogleButton/GoogleButton';

export function LoginForm(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const zelda = () => {
    console.log(password);
  }

  return(
    <LoginContainer>
      <h1>Login</h1>
      <div className="flex mb2vh">
        <p>Insira suas informações para entrar</p>
        <p>na plataforma</p>
      </div>
      <EmailInput getItem={setEmail} name="Email" formName="email" />
      <PasswordInput getItem={setPassword} name="Senha" formName="password"/>
      <div className="options">
        <RememberCheckbox value={setRemember}/>
        <p className="forgotPassword underline">Esqueceu a senha?</p>
      </div>
      <LoginButton name="Entrar" onClick={zelda}/>
      <div className="createAccount">
        <p>Ainda não possui conta?</p>
        <p className="red underline">Crie a sua</p>
      </div>
      <div className="or">
        <hr className="hr1"/>
        <p>ou</p>
        <hr className="hr2"/>
      </div>
      <GoogleButton />
      <p className="terms">Ao se inscrever no ninASS, você concorda com nossos Termos.</p>
    </LoginContainer>
  );
}