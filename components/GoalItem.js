import { StyleSheet,View,Text,Pressable } from "react-native";


function GoalItem(props){
    return(
      <View style={styles.goalItem}>
      <Pressable android_ripple={{color:"#BAD900"}}
       onPress={props.onDelete.bind(this, props.id) }
        style={({pressed})=>pressed&&styles.pressedItem}>
      
          <Text style={styles.textstyle} >{props.text}</Text>
         
      </Pressable>
      </View>
       
    )
};

export default GoalItem;

const styles=StyleSheet.create({
    goalItem: {
        margin:8,
        padding:9,
        borderRadius:6,
        backgroundColor: "#EF0058",
       },
       textstyle:{
         color:"white",
     padding:8,
       }
});