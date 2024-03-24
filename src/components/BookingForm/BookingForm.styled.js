import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const Input = styled.input `
    width: 400px;
    height: 56px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 18px;
    border: none;
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
`

export const BookingTitle = styled.div `
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 400px;
    height: 56px;
`

export const BookingFormTitle = styled.h3 `
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    margin: 0;
`
export const BookingFormSpan = styled.span `
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

`

export const Form = styled.form `
    width: 448px;
    border: 1px solid ${colors.grey};
    border-radius: 10px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    box-sizing: border-box;
`

export const TextArea = styled.textarea `
    width: 400px;
    height: 114px;
    resize: none;
    padding: 18px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    box-sizing: border-box;
    text-align: left;
    border-radius: 10px;
    border: none;

`

export const Button = styled.button `
    width: 160px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 200px;
    background-color: ${colors.red};
    color: ${colors.white};
    box-sizing: border-box;
`
export const InputHolder = styled.div `
    display: flex;
    flex-direction: column;
    row-gap: 14px;
`
