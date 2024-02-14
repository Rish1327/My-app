import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [cousre, setCourse] = useState([]);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourse((currentCourseGoals) => [currentCourseGoals, goalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your cousre goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {cousre.map((goal) => (
          <Text>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "red",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "60%",
    padding: 8,
    margiRight: 8,
  },
  goalsContainer: {
    flex: 6,
  },
});
