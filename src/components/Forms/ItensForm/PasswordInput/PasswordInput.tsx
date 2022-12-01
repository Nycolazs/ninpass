import { InputWrapper, P, Input, Icon, Body } from "./PasswordInput.styled";
import { Eye, EyeOff } from 'react-ionicons'
import { useState } from "react";

export default function PasswordInput(props:any){
  const {value, name, filled, onChange, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const eye = <Eye color={'#C1BDBD'} height="2.2vh" width="2.2vh" />;
  const eyeOff = <EyeOff color={'#C1BDBD'} height="2.2vh" width="2.2vh" />;

  const getItem = (e:any) => {
    setPassword(e.target.value);
    props.getItem(e.target.value);
  }

  return (
    <Body>
      <InputWrapper>
        <P>{name}</P>
        <div className="row">
          <Input
            className={filled ? "notFilled" : ""}
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            {...rest}
            onChange={getItem}
            value={password || ""}
          />
          <Icon onClick={ ()=>setShowPassword(!showPassword) }>
            {showPassword ? eyeOff : eye}
            </Icon>
        </div>
      </InputWrapper>
      <p className={filled ? "fill notFilled": "fill"}>Este campo precisa foi preenchido</p>
    </Body>
  );
}