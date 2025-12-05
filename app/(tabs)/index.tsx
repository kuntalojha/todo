import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();
  
  // const todos = useQuery(api.todos.getTodos);
  // console.log(todos);
  // const addTodos =  useMutation(api.todos.addTodo);
  // const clearAllTodos =  useMutation(api.todos.clearAllTodos);
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Kuntal Ojha !</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle the mode</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => addTodos({text:"New Todo from Expo"})}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => clearAllTodos()}>
          <Text>Clear All Todos</Text>
        </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor: "#1D232A",
    gap:10,
  },
  text:{ 
    fontSize: 20,
    fontWeight: "bold",
    color:"#0ae8ad" 
   }
});