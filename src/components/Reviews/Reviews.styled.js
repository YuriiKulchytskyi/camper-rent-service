import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const ReviewContainer = styled.div `
    width: 430px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`
export const NameContainer = styled.div `
    height: 60px;
    display: flex;
    flex-direction: row;
    column-gap: 16px;

`

export const Avatar = styled.div `
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: none;
    background-color: ${colors.lightGrey};
    color: ${colors.red};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NameHolder = styled.div `
margin-top: 10px;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export const Holder = styled.div `
    height: 60px;
`

export const StarList = styled.ul `
    width: 96px;
    height: 16px;
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 4px;
    padding: 0;
    list-style: none;

`

export const StarSvg = styled.svg `
    width: 16px;
    height: 16px;
`

export const Review = styled.p `
    width: 430px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

`

export const ReviewHolder = styled.ul `
    list-style: none;
    padding: 0;
`
