import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const ListWrapper = styled.div `
   display: flex;
   align-items: center;
   margin-left: -50px;

   `
export const FavoriteWrapper = styled.div `
   display: flex;
   justify-content: center;
   padding: 30px;
   padding-top: 120px;

   `
export const ImageWrapper = styled.div `
   position: relative;
   width: 600px;
   height: 500px;
   align-items: center;
   justify-content: center;
   display: flex;
   flex-direction: column;
   font-size:xx-large ;
   text-align: center;
   margin-left: 50px;
   margin-top: 150px;
   border-radius: 200px;
   background-color: rgba(255, 255, 255 ,0.8);
   border: 2px solid transparent; 
   box-shadow: 0 0 100px 5px rgba(0, 0, 0, 0.5);

`
export const ReturnButton = styled.button `
   border: none;
   background-color: transparent;
   color: ${colors.red};
   font-size:xx-large ;
   cursor: pointer;

`
export const SvgCamper = styled.svg `
   width: 400px;
   height: 300px;
`

export const BackgroundWrapper = styled.div `
`
