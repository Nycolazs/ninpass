import { useState } from "react";
import { Input, P, EmailInputWrapper } from "./EmailInput.styled";

export default function EmailInput(props:any) {
  const { value, name, formName, ...rest } = props;
  const [email, setEmail] = useState(value);

  const getItem = (e:any) => {
    setEmail(e.target.value);
    props.getItem(e.target.value);
  }

  return (
    <EmailInputWrapper>
      <P>{name}</P>
      <Input
        type="email"
        onChange={getItem}
        placeholder="Digite seu email"
        formName={formName}
        value={email || ""}
        {...rest}
      />
    </EmailInputWrapper>
  );
}
