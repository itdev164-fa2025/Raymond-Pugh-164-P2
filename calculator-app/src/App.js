import React, { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import { ThemeProvider } from "styled-components";
import { Box, Flex } from "rebass"; 

const theme = {
  buttonColor: "#3498db",
  buttonHoverColor: "#2980b9",
  textColor: "#ffffff",
  displayBgColor: "#2c3e50",
  displayTextColor: "#ecf0f1",
};

const App = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["C"]
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box p={3}>
        <Display value={input} />
        <Flex flexDirection="column" justifyContent="space-between" p={2}>
          {buttons.map((row, rowIndex) => (
            <Flex key={rowIndex} width={1} justifyContent="space-between">
              {row.map((button, buttonIndex) => (
                <Box key={buttonIndex} width="20%" p={1}>
                  <Button value={button} onClick={handleButtonClick} />
                </Box>
              ))}
            </Flex>
          ))}
        </Flex>
      </Box>
    </ThemeProvider>
  );
};

export default App;
