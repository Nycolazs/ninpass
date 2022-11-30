import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: left;

  p{
    font-size: 1.3vh;
    color: white;
    margin-left: 1vh;
    font-weight: 600;
    margin: 0;
    margin-left: 0.5vh;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  padding-top: 0.5vh;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer;
  width: 2vh;
  height: 2vh;
  border: 0.2vh solid white;
  border-radius: 0.7vh;
  background: rgba(255, 255, 255, 0.17);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.4px);
  -webkit-backdrop-filter: blur(4.4px);
  margin-left: 1vh;
`;