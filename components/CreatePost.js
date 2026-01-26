import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "./Button";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.card}>
      <Text style={styles.h3}>Create a Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Post title..."
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="What's on your mind?"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <View style={styles.btnRow}>
        <Button label="Post" onClick={() => console.log(title, content)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 16, borderRadius: 12, marginBottom: 16, elevation: 2 },
  h3: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, padding: 12, marginBottom: 12 },
  textarea: { height: 100, textAlignVertical: 'top' },
  btnRow: { width: 100, alignSelf: 'flex-end' }
});