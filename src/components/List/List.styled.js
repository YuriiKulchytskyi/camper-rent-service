import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const ListofItems = styled.ul `
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin: 0;
`

export const LoadMoreBtn = styled.button `
    width: 145px;
    height: 56px;
    border-radius: 200px;
    border: 1px solid ${colors.grey};
    transition: .5s ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(250%, 50%);


`
