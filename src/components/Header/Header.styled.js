import styled from "styled-components";
import {
  colors
} from "style/globalColors";

export const HeaderWrapper = styled.div `
    width: 100%;
    height: 100px;
    display: flex;

    align-items: center;
    justify-content: center;
    background-color: ${colors.lightGrey};
    position: fixed;
    z-index: 99;
    opacity: 0.8;
`

export const NavMenu = styled.nav `
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const NavList = styled.ul `
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    padding: 0;
`

export const HeaderSvg = styled.svg `
    width: 50px;
    height: 50px;
`
