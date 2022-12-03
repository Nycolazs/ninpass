import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff4d43;
  border-radius: 1.4vh;
  color: white;
  cursor: pointer;
  font-size: 1.5vh;
  font-weight: 600;
  height: 40px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  width: 100%;
  height: 5vh;
  margin-bottom: 1vh;

  &:hover {
    background-color: #ff4d43;
    opacity: 0.8;
    transition: 0.3s ease-in-out !important;
  }
`;
