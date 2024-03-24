import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const Section = styled.section `
    width: 360px;
    height: 167px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

export const Title = styled.h2 `
    margin: 0;

    &::after{
        content: '';
        width: 100%;
        height: 3px;
        background-color: ${colors.lightGrey};
        position: absolute;
        left: 0;
        top: 45px;
    }
`
export const ListOfTypes = styled.ul `
    display: flex;
    flex-direction: row;
    width: 360px;
    column-gap: 10px;
    height: 95px;
    list-style: none;
    padding: 0;
    margin: 0;

    `
export const ListOption = styled.li `

height: 100%;
width: 100%;
border: 1px solid ${colors.grey};
background-color: rgba(255, 255, 255, 0.8);
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;

&:nth-child(2){
    padding: 0 17px;
}

&:active,
:focus{
    border-color: ${colors.red};
}
`

export const TypeSvg = styled.svg `
    width: 40px;
    height: 28px;
    stroke: ${colors.dark};
`

export const SvgDescription = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Desc = styled.p `
    max-width: 80px;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    margin: 0;
    align-items: center;
    justify-content: center;
`
export const EquipmentSection = styled.section `
    width: 360px;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

export const EquipmentSvg = styled.svg `
    width: 32px;
    height: 32px;
`

export const EquipmentList = styled.ul `
    width: 360px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    gap: 8px;
    margin: 0;
    padding: 0;
`


export const EquipmentItem = styled.label `
    width: 112px;
    height: 95px;
    border: 1px solid ${colors.grey};
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:active,
    :focus{
      border-color:${colors.red};
    }
`
export const SectionWrapper = styled.section `
    width: 360px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;

`
export const FiltersTitle = styled.h4 `
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        margin: 0;
`
export const FiltersWrapper = styled.div `
    display: flex;
    flex-direction: column;
    row-gap: 30px;

`

export const RadioButton = styled.input `

    &:checked,
    &:active{
        &>svg{
            stroke: ${colors.red};
        }
    }

`


export const Span = styled.span `
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`;
