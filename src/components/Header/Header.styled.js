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
`

export const NavMenu = styled.nav `
    width: 400px;
    height: 50%;
`

export const NavList = styled.ul `
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding: 0;
`
