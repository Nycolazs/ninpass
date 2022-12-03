import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55vh;
  height: 100vh;
  box-sizing: border-box;

  font-family: 'Poppins', sans-serif;
  
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    top: 16vh;
    left: 9vh;

    opacity: 1;

    transition: all 0.5s ease-in-out;
  }
  
  .invisible{
    opacity: 0;
    left: -38vh !important;
  }
  
  .register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    top: 15vh;
    left: -38vh;

    opacity: 0;

    transition: all 0.5s ease-in-out;
  }

  .visible{
    opacity: 1;
    left: 9vh !important;
  }

  button{
    position: absolute;
    right: 0;
  }
`;

export const LogoImage = styled.img`
  width: 22vh;
  height: 8vh;
  position: absolute;
  top: 10vh;
  left: 16.5vh;
`;