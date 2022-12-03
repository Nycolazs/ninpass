import styled from 'styled-components';

export const RegisterContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #C1BDBD;
  flex-direction: column;
  
  h1 {
    font-size: 4vh;
    font-weight: 600 !important;
    margin: 0px;
  }

  .flex.mb2vh p{
    font-size: 1.1vh;
    font-weight: 600 !important;
    margin: 0px;
  }

  .flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mb2vh{
    margin-bottom: 2vh;
  }

  .options{
    display: flex;
    margin-top: 0.4vh;
    flex-direction: row;
    width: 100%;
  }

  .forgotPassword{
    display: flex;
    color: #C1BDBD;
    font-size: 1.1vh;
    font-weight: 600 !important;
    margin: 0px;
    cursor: pointer;
    width: 100%;
    justify-content: right;
    margin-right: 1vh;
  }

  .login{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1.6vh;
    color: #C1BDBD;
    font-size: 1.3vh;
    font-weight: 300 !important;
    margin: 0px;
    top: 66vh;
    left: 1vh;

    p{
      cursor: pointer;
      margin: 0px;
      margin-left: 0.5vh;
      font-weight: 600 !important;
    }
  }

  .red{
    color: #ff4d43;
  }

  .underline{
    text-decoration: underline;
  }

  .terms{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #C1BDBD;
    font-size: 1.1vh;
    font-weight: 600 !important;
    margin-top: 1vh;
  }

  .mt1vh{
    margin-top: 10vh;
  }
`;