import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: #ff4d43 solid 0.4vh;
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
  color: #ff4d43;

  &:hover {
    background-color: #ff4d43;
    color: white;
    transition: 0.3s;
  }

  .intern{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .icon{
    transition: 0.3s;
    margin-top: 0.3vh;
    margin-right: 0.5vh;
  }
`;
