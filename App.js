import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet,  View,   FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {
  const [cousre, setCourse] = useState([]);

  useEffect(() => {
    
    for(let i =0; i< 10000; i++) {
      setCourse(cour => [...cour, {
        item: {
          text: "text" + i,
          id: i.toString()
        },
      }])
    }

  }, [])
  

 function addGoalHandler(goalText) {
    setCourse((currentCourseGoals) => 
    [...currentCourseGoals,
      { text:goalText,id:Math.random().toString()}
    ]);
  }
  function deleteGoalHandler(id) {
   setCourse((currentCourseGoals)=>{
    return currentCourseGoals.filter((goal)=>goal.id!==id);
   }); 
  }
  return (
    <View style={styles.appContainer}>
     <GoalInput addGoal={addGoalHandler}/>
      <View  style={styles.goalsContainer}>
      <FlatList 
      data={cousre} 
      renderItem={(itemData)=>{ 
        return(
          <GoalItem text={itemData.item.text} 
          id={itemData.item.id}
          onDelete={deleteGoalHandler}/>
        );
      }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:"#FBA158"
  },
 
  goalsContainer: {
    flex: 6,
  },
  goalItem: {
   margin:8,
   padding:9,
   borderRadius:6,
   backgroundColor: "#EF0058",
  },
  textstyle:{
    color:"white"

  }
});
