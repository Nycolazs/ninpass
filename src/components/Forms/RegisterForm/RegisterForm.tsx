import { useState } from "react";
import Input from "../ItensForm/Input/Input";
import GoogleButton from "../ItensForm/GoogleButton/GoogleButton";
import LoginButton from "../ItensForm/LoginButton/LoginButton";
import PasswordInput from "../ItensForm/PasswordInput/PasswordInput";
import RememberCheckbox from "../ItensForm/RememberCheckbox/RememberCheckbox";
import Version from "../ItensForm/Version/Version";
import { RegisterContainer } from "./RegisterForm.styled";

export default function RegisterForm(props: any) {
  let { change, ...rest } = props;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [nomeFilled, setNomeFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [passFilled, setPassFilled] = useState(false);
  const [phoneFilled, setPhoneFilled] = useState(false); 

  const createAccount = () => {
    if(!verifyFields()){
      console.log("registrado")
    }
  }

  const authGoogle = () => {
    console.log("google");
  }

  const verifyFields = () => {
    let filled = false;
    if(nome==""){
      setNomeFilled(true);
      setTimeout(() => {
        setNomeFilled(false);
      }, 2000);
      filled = true;
    }
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
    if(phone==""){
      setPhoneFilled(true);
      setTimeout(() => {
        setPhoneFilled(false);
      }, 2000);
      filled = true;
    }
    return filled;
  }
  
  return(
    <RegisterContainer>
      <h1>Cadastre-se</h1>
      <div className="flex mb2vh">
        <p>Insira suas informações para se</p>
        <p>cadastrar na nossa plataforma</p>
      </div>
      <Input getItem={setNome} filled={nomeFilled} name="Nome" placeHolder="Digite seu nome" />
      <Input getItem={setEmail} filled={emailFilled} name="Email" placeHolder="Digite seu e-mail" />
      <PasswordInput getItem={setPassword} filled={passFilled} name="Senha" />
      <Input getItem={setPhone} filled={phoneFilled} name="Telefone" placeHolder="Digite seu número de telefone" mask="(99) 99999-9999" />
      <LoginButton name="Criar conta" onClick={createAccount} />
      <GoogleButton onClick={authGoogle} name="Criar com o Google" />
      <p className="terms">Ao se inscrever no ninASS, você concorda com nossos Termos.</p>
      <div className="login">
        <p>Já possui uma conta?</p>
        <p className="red underline" onClick={change}>Faça o Login</p>
      </div>
      <div className="mt1vh">
        <Version />
      </div>
    </RegisterContainer>
  );
}