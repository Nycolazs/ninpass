import { Button } from './GoogleButton.styled';
import { LogoGoogle } from "react-ionicons";

export default function GoogleButton(props: any){
  let { ...rest } = props;

  return (
    <Button>
      <div className="intern">
        <LogoGoogle 
          color= "#ff4d43"
          height="2.5vh"
          width="2.5vh"
        />
        <p>Entrar com Google</p>
      </div>
    </Button>
  );
}