import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ScrollView, View, Alert } from "react-native";
import Note from "./components/Note/Note";
import NoteInput from "./components/NoteInput/NoteInput";

export default function App() {
  const [notes, setNotes] = useState(["dddd", "aaaa"]);

  const addNote = (note) => {
    if (note.length === 0) {
      alert("Error:\nEmpty note");
    } else if (notes.findIndex((element) => element === note) === -1) {
      setNotes([...notes, note]);
    } else {
      alert("Error:\nNote not added. Identical note already exists.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 10 }}>
        {notes.map((note) => (
          <Note text={note} key={note} />
        ))}
      </ScrollView>
      <NoteInput addNote={addNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#123",
    paddingBottom: 15,
  },
});
