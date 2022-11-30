import styled from "styled-components";

export const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const P = styled.p`
  margin: 0px;
  margin-left: 1vh;
  color: #C1BDBD;
  font-weight: 600;
  font-size: 1.5vh;
`;

export const Input = styled.input`
  width: 37vh;
  height: 5vh;
  border: 0.1vh solid #c1bdbd;
  padding: 0px 10px;
  font-size: 1.5vh;
  outline: none;
  transition: 0.3s;
  background: rgba(255, 255, 255, 0.17);
  border-radius: 1vh;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.4px);
  -webkit-backdrop-filter: blur(4.4px);
  color: #C1BDBD;

  &::placeholder {
    color: #C1BDBD;
  }

  &:focus {
    border: 1px solid #c1bdbd;
  }
`;
