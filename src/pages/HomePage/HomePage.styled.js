import styled from "styled-components";

export const ButtonWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

export const Label = styled.label `
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid black;

  /* Змінюємо колір рамки, коли чекбокс вибраний */
  & input[type = 'checkbox']:checked + p {
    border-color: red;
  }
`;

export const Input = styled.input `
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  /* Змінюємо колір рамки label при виборі чекбокса */
  &:checked + p {
    /* Стилізація тексту, коли чекбокс вибраний */
    font-weight: bold;
  }
`;

export const Text = styled.span `
  /* Стилізація тексту */
  font-size: 14px;
  line-height: 1.5;
  padding: 10px;
`;
