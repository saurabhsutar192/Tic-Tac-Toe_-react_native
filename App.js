import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Button, Alert } from "react-native";
import styled from "styled-components/native";

let primaryColor = "orange";

let Container = styled.View`
  display: flex;
  align-items: center;

  padding: 60px 20px;
  height: 100%;
  width: 100%;
`;
let BlueText = styled.Text`
  color: ${primaryColor};
  font-weight: bold;
`;
let BoxContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 70px 0 20px 0;
`;
let ButtonContainer = styled.View`
  display: flex;
  align-items: center;
`;
let ControlBtns = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  background: #fff;
  border: 2px solid black;
  padding: 10px 20px;
  margin-top: 10px;
`;
let Btns = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
let MainBox = styled.Pressable`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  ${(props) => {
    switch (props.box) {
      case "b1":
        return { border: "none" };
      case "b3":
        return { border: "none" };
      case "b9":
        return { border: "none" };
      case "b7":
        return { border: "none" };
      case "b2":
        return { borderTopWidth: 0, borderBottomWidth: 0 };
      case "b4":
        return { borderRightWidth: 0, borderLeftWidth: 0 };
      case "b6":
        return { borderRightWidth: 0, borderLeftWidth: 0 };
      case "b8":
        return { borderTopWidth: 0, borderBottomWidth: 0 };
    }
  }}
`;

let Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: ${(prop) => prop.color};
`;

let ScoreBoardContainer = styled.View`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
let Scores = styled.Text`
  font-size: 25px;
`;

export default function App() {
  let [switcher, setSwitcher] = useState(true);
  let [values, setValues] = useState({
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",
    b9: "",
  });
  let [scores, setScores] = useState({ x: 0, o: 0 });

  function handlePress(box) {
    switch (box) {
      case "b1":
        addValues("b1");
        break;
      case "b3":
        addValues("b3");
        break;
      case "b9":
        addValues("b9");
        break;
      case "b7":
        addValues("b7");
        break;
      case "b2":
        addValues("b2");
        break;
      case "b4":
        addValues("b4");
        break;
      case "b6":
        addValues("b6");
        break;
      case "b8":
        addValues("b8");
        break;
      case "b5":
        addValues("b5");
        break;
    }
  }

  function addValues(box) {
    if (values[box] === "") {
      setSwitcher(!switcher);
      setValues({ ...values, [box]: `${switcher ? "X" : "O"}` });
    }
  }

  function compare() {
    if (
      values.b1 === values.b2 &&
      values.b1 === values.b3 &&
      values.b1 !== ""
    ) {
      if (values.b1 === "X") {
        playerX_wins();
      } else {
        playerO_wins();
      }
      restart();
    } else if (
      values.b4 === values.b5 &&
      values.b4 === values.b6 &&
      values.b4 !== ""
    ) {
      if (values.b4 === "X") {
        playerX_wins();
      } else {
        playerO_wins();
      }
      restart();
    } else if (
      values.b7 === values.b8 &&
      values.b7 === values.b9 &&
      values.b7 !== ""
    ) {
      if (values.b7 === "X") {
        playerX_wins();
      } else {
        playerO_wins();
      }
      restart();
    } else if (
      values.b1 === values.b4 &&
      values.b1 === values.b7 &&
      values.b1 !== ""
    ) {
      if (values.b1 === "X") {
        playerX_wins();
      } else {
        playerO_wins();
      }
      restart();
    } else if (
      values.b2 === values.b5 &&
      values.b2 === values.b8 &&
      values.b2 !== ""
    ) {
      if (values.b2 === "X") {
        playerX_wins();
      } else {
        playerO_wins();
      }
      restart();
    } else if (
      values.b3 === values.b6 &&
      values.b3 === values.b9 &&
      values.b3 !== ""
    ) {
      if (values.b3 === "X") {
        playerX_wins();
      } else {
        playerO_wins();
      }
      restart();
    } else if (
      values.b1 === values.b5 &&
      values.b1 === values.b9 &&
      values.b1 !== ""
    ) {
      if (values.b1 === "X") {
        playerX_wins();
      } else {
        playerO_wins();
      }
      restart();
    } else if (
      values.b3 === values.b5 &&
      values.b3 === values.b7 &&
      values.b3 !== ""
    ) {
      if (values.b3 === "X") {
        playerX_wins();
      } else {
        playerO_wins();
      }
      restart();
    } else if (
      values.b1 !== "" &&
      values.b4 !== "" &&
      values.b7 !== "" &&
      values.b2 !== "" &&
      values.b5 !== "" &&
      values.b8 !== "" &&
      values.b3 !== "" &&
      values.b6 !== "" &&
      values.b9 !== ""
    ) {
      Alert.alert("Tied!");
      restart();
    }
  }

  function playerX_wins() {
    Alert.alert("Player X wins !");
    setScores({ ...scores, x: scores.x + 1 });
  }
  function playerO_wins() {
    Alert.alert("Player O wins !");
    setScores({ ...scores, o: scores.o + 1 });
  }

  function restart() {
    setValues({
      b1: "",
      b2: "",
      b3: "",
      b4: "",
      b5: "",
      b6: "",
      b7: "",
      b8: "",
      b9: "",
    });
    setSwitcher(true);
  }
  function reset() {
    restart();
    setScores({ x: 0, o: 0 });
  }

  function Box({ box }) {
    return (
      <MainBox box={box} onPress={() => handlePress(box)}>
        <Title color={primaryColor}>{values[box]}</Title>
      </MainBox>
    );
  }

  useEffect(() => {
    compare();
  }, [values]);

  return (
    <Container>
      <StatusBar style="auto" />
      <Title color="black">
        Tic <BlueText>Tac</BlueText> Toe
      </Title>
      <BoxContainer>
        <Box box="b1" />
        <Box box="b2" />
        <Box box="b3" />
        <Box box="b4" />
        <Box box="b5" />
        <Box box="b6" />
        <Box box="b7" />
        <Box box="b8" />
        <Box box="b9" />
      </BoxContainer>
      <ButtonContainer>
        <ControlBtns underlayColor={primaryColor} onPress={restart}>
          <Btns>Clear</Btns>
        </ControlBtns>
        <ControlBtns underlayColor={primaryColor} onPress={reset}>
          <Btns>Reset</Btns>
        </ControlBtns>
      </ButtonContainer>
      <ScoreBoardContainer>
        <Scores>
          Player<BlueText>X</BlueText> : {scores.x}{" "}
        </Scores>
        <Scores>
          {scores.o} : Player<BlueText>O</BlueText>{" "}
        </Scores>
      </ScoreBoardContainer>
    </Container>
  );
}
