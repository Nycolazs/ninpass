import { Button } from './GoogleButton.styled';
import { LogoGoogle } from "react-ionicons";
import { useState } from 'react';

export default function GoogleButton(props: any){
  let { onClick, ...rest } = props;
  const [ hover, setHover ] = useState(false);

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="intern">
        <LogoGoogle
          cssClasses="icon"
          color= {hover ? "white" : "#ff4d43"}
          height="2.5vh"
          width="2.5vh"
        />
        <p>Entrar com Google</p>
      </div>
    </Button>
  );
}