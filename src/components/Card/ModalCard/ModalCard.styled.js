import {
  NavLink
} from "react-router-dom";
import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const SectionModal = styled.section `
    width: 982px;
    height: 720px;
    border: none;
    border-radius: 20px;
    padding: 40px;
    background-color: ${colors.white};
    box-sizing: border-box;
    border-radius: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
          width: 3px;
        }
    &::-webkit-scrollbar-track {
          border-radius: 50px;
          margin: 25px 0;
          background-color: ${colors.lightGrey};
        }

`
export const ModalInformationWrapper = styled.div `
    display: flex;
    flex-direction: column;
    width: 902px;
    height: 110px;
    justify-content: space-between;
    align-items: start;
    background-color: ${colors.white};
    position: relative;

`
export const ModalTitle = styled.h2 `
    font-family: 'Inter Tight', sans-serif;
    height: 30px;
    width: auto;
    font-weight: 600;
    text-align: left;
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: ${colors.dark};
    overflow: hidden;
`
export const ModalPrice = styled.h2 `
    height: 30px;
    width: auto;
    font-family: 'Inter Tight';
    font-weight: 600;
    margin: 0;
    font-size: 24px;
`

export const ModalRateLocationWrapper = styled.div `
    display: flex;
    flex-direction: row;
    width: auto;
    height: 24px;
    column-gap: 16px;
`

export const Rate = styled.div `
    text-decoration: underline;
`

export const Location = styled.div `
    position: relative;
`

export const ModalGallery = styled.ul `
    width: 100%;
    height: 310px;
    display: flex;
    flex-direction: row;
    column-gap: 16px;
    list-style: none;
    padding: 0;
`

export const ModalGalleryItem = styled.li `
    border-radius: 10px;
    width: 290px;
    height: 310px;
    transition: 1.5 ease;
    `

export const ModalDescription = styled.p `
    width: 100%;
    height: auto;
    `

export const ModalCloseButton = styled.button `
    background-color: transparent;
    border: none;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    `

export const ModalItemImage = styled.img `
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: .5s ease-in-out;
     &:hover {
       transform: scale(1.1);
       /* object-fit: fill; */
     }
`
export const ModalTechInfo = styled.div `
    margin-top: 30px;
`
export const ModalBackdrop = styled.div `
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;


export const Backdrop = styled.div `
       position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-color: rgba(0, 0, 0, 0.5);
         display: flex;
         justify-content: center;
         z-index: 1000;
         align-items: center;
`
export const ModalContent = styled.div `
        background-color: '#fff';
          padding: 20px;
          border-radius: 8px;
          max-width: 80%;
          max-height: 80%;
          overflow: auto;
          position: relative;
          z-index: 1001;
        
`

export const AdditionalNav = styled.nav `
  margin-top: 44px;
  margin-bottom: 68px;
  display: flex;
  flex-direction: row;
  gap: 36px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-color: rgba(16, 24, 40, 0.2);
    height: 1px;
    width: 100%;
    bottom: -24px;
  }
`
export const StyledLink = styled(NavLink)
`
  color: ${colors.grey};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: relative;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &.active {
    &::after {
      position: absolute;
      content: '';
      background-color: ${colors.red};
      height: 5px;
      width: 100%;
      bottom: -26px;
    }
  }
`;

export const InfoFormContainer = styled.div `
  display: flex;
  flex-direction: row;
  column-gap: 24px;
`

export const InfoContainer = styled.div `
  display: flex;
  flex-direction: column;
  height: 530px;
`
