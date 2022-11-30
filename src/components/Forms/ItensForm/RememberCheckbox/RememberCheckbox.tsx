import { useState } from "react";
import { Checkmark } from "react-ionicons";
import { Checkbox, Container } from "./RememberCheckbox.styled";

export default function RememberCheckbox(props:any){
  const { value, ...rest } = props;
  const [checked, setChecked] = useState(false);

  const getValue = () => {
    setChecked(!checked);
    props.value(!checked);
  }

  return(
    <Container>
      <Checkbox
        onClick={getValue}
      >
        {checked && <Checkmark color={"#fff"} height="1.8vh" width="1.8vh" />}
      </Checkbox>
      <p>Lembrar de mim</p>
    </Container>
  );
}