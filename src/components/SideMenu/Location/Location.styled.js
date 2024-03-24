import {
  colors
} from "style/globalColors";
import styled from "styled-components";


export const LocationWrapper = styled.section `
    width: 360px;
    height: 88px;
    display: flex;
    row-gap: 16px;
    flex-direction: column;
`

export const InputSvgWrapper = styled.div `
    position: relative;
    
`

export const LocationInput = styled.input `
    box-sizing: border-box;
    width: 100%;
    height: 58px;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 10px;
    background-color: ${colors.lightGrey};
    padding-left: 50px;
    position: relative;
`

export const InputIcon = styled.svg `
    width: 18px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
`
export const LocationTitle = styled.h4 `
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    margin: 0;

`
