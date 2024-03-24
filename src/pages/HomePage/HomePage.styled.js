import styled from "styled-components";

export const ButtonWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;


`

export const BackgroundWrapper = styled.div `
position: relative;
flex-direction: column;
  background-image: url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
`
export const DescriptionWrapper = styled.div `
position: absolute;
  width: 550px;
  height: auto;
  right: 450px;
  top: 100px;
`
export const HomeTitle = styled.h1 `
    font-style: oblique;
`

export const Description = styled.p `
    font-size: larger;
    color: #101828;
`
