import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const ListWrapper = styled.div `
   height: 100%;
   display: flex;
   align-items: center;
   margin-left: -50px;
   `
export const FavoriteWrapper = styled.div `
   height: auto;
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
     border: 2px solid transparent; /* Опціонально, для збереження розміру елемента */
  /* border-radius: 10px; Опціонально, для закруглення кутів */
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
  background-image: url('https://www.atlasandboots.com/wp-content/uploads/2015/08/western-states-road-trip-13.jpg');
background-size: cover;
height: 1000px;
  background-repeat: no-repeat;
  background-attachment: fixed; 
`
