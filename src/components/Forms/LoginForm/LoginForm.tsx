import { LoginContainer } from './LoginForm.styled';
import Input from '../ItensForm/Input/Input';
import PasswordInput from './../ItensForm/PasswordInput/PasswordInput';
import { useState } from 'react';
import RememberCheckbox from '../ItensForm/RememberCheckbox/RememberCheckbox';
import LoginButton from '../ItensForm/LoginButton/LoginButton';
import GoogleButton from '../ItensForm/GoogleButton/GoogleButton';
import Version from '../ItensForm/Version/Version';

export default function LoginForm(props:any){
  let { change, ...rest } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [emailFilled, setEmailFilled] = useState(false);
  const [passFilled, setPassFilled] = useState(false);

  const login = () => {
    if(!verifyFields()){
      console.log("logado")
    }
  }

  const forgotPassword = () => {
    console.log("forgot password");
  }

  const authGoogle = () => {
    console.log("google");
  }

  const verifyFields = () => {
    let filled = false;
    if(email==""){
      setEmailFilled(true);
      setTimeout(() => {
        setEmailFilled(false);
      }, 2000);
      filled = true;
    }
    if(password==""){
      setPassFilled(true);
      setTimeout(() => {
        setPassFilled(false);
      }, 2000);
      filled = true;
    }
    return filled;
  }

  return(
    <LoginContainer>
      <h1>Login</h1>
      <div className="flex mb2vh">
        <p>Insira suas informações para entrar</p>
        <p>na plataforma</p>
      </div>
      <Input getItem={setEmail} filled={emailFilled} name="Email" placeHolder="Digite seu e-mail" />
      <PasswordInput getItem={setPassword} filled={passFilled} name="Senha" />
      <div className="options">
        <RememberCheckbox value={setRemember}/>
        <p className="forgotPassword underline" onClick={forgotPassword}>Esqueceu a senha?</p>
      </div>
      <LoginButton name="Entrar" onClick={login}/>
      <div className="createAccount">
        <p>Ainda não possui conta?</p>
        <p className="red underline" onClick={change}>Crie a sua</p>
      </div>
      <div className="or">
        <hr className="hr1"/>
        <p>ou</p>
        <hr className="hr2"/>
      </div>
      <GoogleButton onClick={authGoogle} name="Entrar com o Google" />
      <p className="terms">Ao se inscrever no ninASS, você concorda com nossos Termos.</p>
      <div className="mt1vh">
        <Version />
      </div>
    </LoginContainer>
  );
}