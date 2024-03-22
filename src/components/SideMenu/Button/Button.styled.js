import {
  colors
} from "style/globalColors";
import styled from "styled-components";

export const SearchButton = styled.button `
       width: 166px;
       height: 56px;
       background-color: ${colors.red};
       border-radius: 200px;
       border: none;
       color: ${colors.white};
       font-size: 16px;
       font-weight: 500;
       line-height: 24px;
       letter-spacing: -0.005em;
       cursor: pointer;
       transition: .5s ease;

       &:hover{
        background-color: brown;
        transform: scale(1.1)
       }
`
