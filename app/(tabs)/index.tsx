import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ScrollableCalender from "@/components/CalenderStrip";
// import DateTimePicker from "@/components/DateTimePickerModal";

export default function Today() {
  return (
    <View style={styles.container}>
      <View style={{marginTop : -35}}>
        <ScrollableCalender />
      </View>
      {/* <DateTimePicker/> */}
      <Text style={styles.title}>Today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
