import { InputWrapper, P, Input, Icon } from "./PasswordInput.styled";
import { Eye } from 'react-ionicons'
import { useState } from "react";

export default function PasswordInput(props:any){
  const {value, name, formName, onChange, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const getItem = (e:any) => {
    setPassword(e.target.value);
    props.getItem(e.target.value);
  }

  return (
    <>
      <InputWrapper>
        <P>{name}</P>
        <div className="row">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            formName={formName}
            {...rest}
            onChange={getItem}
            value={password || ""}
          />
          <Icon onClick={ ()=>setShowPassword(!showPassword) }>
            <Eye 
              width="2.2vh"
              height="2.2vh"
              color={showPassword ? "#ff6f6f" : "#C1BDBD"}/>
            </Icon>
        </div>
      </InputWrapper>
    </>
  );
}