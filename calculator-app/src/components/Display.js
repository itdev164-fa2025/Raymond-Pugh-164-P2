import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  background-color: ${(props) => props.theme.displayBgColor};
  color: ${(props) => props.theme.displayTextColor};
  font-size: 2em;
  padding: 20px;
  border-radius: 5px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const Display = ({ value }) => {
  return <DisplayContainer>{value}</DisplayContainer>;
};

export default Display;
