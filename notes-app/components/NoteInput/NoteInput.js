import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { useState } from "react";
import { TextInput, View, Button } from "react-native";
import NoteStyle from "../Note/NoteStyle";

const NoteInput = (props) => {
  const [text, setText] = useState("");

  const handlePress = () => {
    props.addNote(text);
    setText("");
  };
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={[
          NoteStyle.container,
          { color: "#FFFFFF", height: 40, marginBottom: 15 },
        ]}
        placeholder={"Note text"}
        onChangeText={setText}
        value={text}
      />
      <Button title="Add note" onPress={() => handlePress()} color="darkcyan" />
    </View>
  );
};

export default NoteInput;
