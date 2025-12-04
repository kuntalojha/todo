import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Kuntal Ojha !</Text>
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