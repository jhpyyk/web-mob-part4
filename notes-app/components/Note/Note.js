import { Text, View } from "react-native";
import NoteStyle from "./NoteStyle";

const Note = (props) => {
  return (
    <View style={NoteStyle.container}>
      <Text style={{ color: "#FFF" }}>{props.text}</Text>
    </View>
  );
};

export default Note;
