import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const CardWrapper = styled.div `
width: 888px;
height: 358px;
border: 1px solid transparent;
background-color: rgba(256,  256, 256 , 0.8);
border-radius: 20px;
box-sizing: border-box;
padding: 20px;
display: flex;
flex-direction: row;
column-gap: 20px;
font-family: 'Inter', sans-serif;
backdrop-filter: blur(-20px);

`
export const ImageWrapper = styled.div `

`

export const Image = styled.img `
    object-fit: cover;
    border-radius: 10px;
    height: 310px;
    width: 290px;
`

export const InformationWrapper = styled.div `
    width: 526px;
    height: 310px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    box-sizing: border-box;
`

export const MainInformationWrapper = styled.div `
    width: 526px;
    min-height: 62px;
    display: flex;
    flex-direction:column;
    row-gap: 8px;
    box-sizing: border-box;
`

export const TitlePriceInfo = styled.div `
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const PriceLikeSection = styled.div `
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    color: ${colors.dark};

`

export const Title = styled.h2 `
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
export const Price = styled.h2 `
    height: 30px;
    width: auto;
    font-family: 'Inter';
    font-weight: 800;
    margin: 0;
    font-size: 24px;


`

export const RateLocationWrapper = styled.div `
    display: flex;
    flex-direction: row;
    width: auto;
    height: 24px;
    column-gap: 16px;

`
export const Svg = styled.svg `
    width: ${props => props.width};
  height: ${props => props.height};
  transition: stroke 0.3s ease;
  fill: none;
  stroke: ${colors.dark};
  ${({isLiked}) => isLiked &&
      `
use {
  fill: red; /* Змінюємо колір SVG на червоний, коли кнопка "лайкнута" */
}
`
  }

`

export const ButtonLike = styled.button `
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;

    
`

export const Description = styled.p `
    width: 525px;
    line-height: 24px;
    font-weight: 400;
    font-size: 0.66em;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     margin: 0;
     font-family: Inter;
     font-size: 16px;
     font-weight: 400;
     line-height: 24px;
     text-align: left;
     color: ${colors.grey};

`

export const Location = styled.div `
position: relative;
`

export const Button = styled.button `
    width: 166px;
    height: 56px;
    background-color: ${colors.red};
    border-radius: 200px;
    color: ${colors.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.005em;
    border: none;
    cursor: pointer;
    transition: .5s ease;

     &:hover {
       background-color: brown;
       transform: scale(1.1);
     }



`

export const Rate = styled.div `
    text-decoration: underline;
`

export const ListOfInformation = styled.ul `
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 0;
`

export const ListItem = styled.li `
    display: flex;
    flex-direction: row;
    width: auto;
    padding: 12px 18px;
    border-radius: 100px;
    gap: 8px;
    background-color: ${colors.lightGrey};
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;


`
