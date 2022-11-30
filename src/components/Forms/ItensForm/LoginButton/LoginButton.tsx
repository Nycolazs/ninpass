import { Button } from './LoginButton.styled';

export default function LoginButton(props: any){
  const {value, name, onClick, ...rest } = props;
  return(
    <Button onClick={props.onClick}>
      {name}
    </Button>
  );
}