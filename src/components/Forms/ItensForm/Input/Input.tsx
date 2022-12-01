import { useState } from "react";
import { P, InputWrapper } from "./Input.styled";
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

export default function Input(props:any) {
  const { value, name, type, placeHolder, filled, mask, ...rest } = props;
  const [email, setEmail] = useState(value);
  const maskGenerator = createDefaultMaskGenerator(mask);

  const getItem = (e:any) => {
    setEmail(e);
    props.getItem(e);
  }

  return (
    <InputWrapper>
      <P>{name}</P>
      <MaskedInput
        maskGenerator={mask? maskGenerator : null}
        className={filled ? "CustomInput notFilled" : "CustomInput "}
        type={type}
        onChange={getItem}
        placeholder={placeHolder}
        value={email || ""}
        {...rest}
      />
      <p className={filled ? "fill notFilled": "fill"}>Este campo precisa foi preenchido</p>
    </InputWrapper>
  );
}
