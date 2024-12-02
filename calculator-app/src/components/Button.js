import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.textColor};
  font-size: 1.5em;
  padding: 20px;
  border: none;
  margin: 5px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.buttonHoverColor};
  }
`;

const Button = ({ value, onClick }) => {
  return <StyledButton onClick={() => onClick(value)}>{value}</StyledButton>;
};

export default Button;
