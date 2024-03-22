import styled from "styled-components";

export const MainWrapper = styled.div `
    width: 1440px;  
    flex-direction: row;
    display: flex;
    padding: 64px 100px;
`

export const SideFilters = styled.aside `
    position: fixed;
    width: 360px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`
export const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`
export const CardHolder = styled.div `
    margin-left: 360px;
`
export const Filters = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    row-gap: 20px;
`
