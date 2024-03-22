import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const FeatureSvg = styled.svg `
    width: 20px;
    height: 20px;
`
export const FeaturesOptionsList = styled.ul `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 430px;
    height: 200px;
    gap: 8px;
`

export const FeaturesOptionsItem = styled.li `
   display: flex;
   flex-direction: row;
   width: auto;
   padding: 12px 18px;
   border-radius: 10px;
   gap: 8 px;
   background-color: ${colors.lightGrey};
   font-family: Inter;
   font-size: 16px;
   font-weight: 500;
   line-height: 20px;
   text-align: center;
`
