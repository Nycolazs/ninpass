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
    top: 10vh;
    

  }
  
  .invisible{
    top: -80vh !important;
  }

  .register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 100vh;

  }

  .visible{
    top: 6vh;
  }

  button{
    position: absolute;
    right: 0;
  }
`;

export const LogoImage = styled.img`
  width: 21vh;
  height: 8vh;
`;