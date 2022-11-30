import { Body, Circle } from "./LoginBackground.styled";

export function LoginBackground(props: React.PropsWithChildren<{}>) {
    return (
      <Body>
        <Circle className="c1"/>
        <Circle className="c2"/>
        <Circle className="c3"/>
        {props.children}
      </Body>
    );
}