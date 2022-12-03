import styled from 'styled-components';

export const LoginContainer = styled.div`
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
    margin-bottom: 1vh;
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

  .createAccount{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1.6vh;
    color: #C1BDBD;
    font-size: 1.3vh;
    font-weight: 600 !important;
    margin: 0px;
    margin-top: 1vh;

    p{
      cursor: pointer;
      margin: 0px;
      margin-left: 0.5vh;
    }
  }

  .red{
    color: #ff4d43;
  }

  .underline{
    text-decoration: underline;
  }

  .or{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #C1BDBD;
    font-size: 1.4vh;
    font-weight: 600 !important;
    height: 5vh;
    
    hr{
      width: 100%;
      margin: 0px;
      margin-left: 1vh;
      margin-right: 1vh;
    }
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