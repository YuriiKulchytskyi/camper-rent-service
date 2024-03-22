import styled from "styled-components";

export const DetailsContainer = styled.div `
position: relative;
    width: 430px;
    height: 268px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 24px;
`
export const DetailsTitle = styled.h3 `
    margin: 0;

    &::after{
        content: '';
        width: 100% ;
        height: 3px;
        background-color: #F2F4F7;
        position: absolute;
        left: 0;
        top: 45px;
    }
`
export const ListOfDetails = styled.ul `
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    list-style: none;
    padding: 0;
`
export const DetailsItem = styled.li `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;


`

export const ValueOfDetail = styled.p `
margin: 0;`
