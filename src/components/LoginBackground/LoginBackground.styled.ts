import styled from "styled-components";

export const Body = styled.div`
  background-color: #211d1d;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Circle = styled.div`
  border-radius: 100%;
  position: absolute;
  background: conic-gradient(from 180deg at 50% 50%,#FF6161 0deg,#FF6161 70.5deg,#FF9595 162.37deg,#FF9595 233.62deg,#FF9595 310.5deg,#FF6161 360deg);
  mix-blend-mode: difference;

  &.c1{
    right: -32vh;
    bottom: -30vh;
    width: 40vh;
    height: 71vh;
    filter: blur(21vh);
  }

  &.c2{
    left: -3vh;
    top: -13vh;
    width: 40vh;
    height: 40vh;
    filter: blur(16vh);
  }

  &.c3{
    left: -26vh;
    top: 30vh;
    width: 40vh;
    height: 40vh;
    filter: blur(16vh);
  }
  
`;