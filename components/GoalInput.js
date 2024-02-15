import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoal() {
    if (goalText.trim().length === 0) {
    
      return;
    }
    props.addGoal(goalText);
    setGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <Button title="Add goal" onPress={addGoal} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "60%",
    padding: 8,
    marginRight: 8,
  },
});
