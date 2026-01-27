import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import TextInputCustom from "./TextInput"; 
import Button from "./Button";

export default function UserProfile({ profileData, onSave }) {
  const [formData, setFormData] = useState(profileData || { name: '', email: '', degree: '', skills: [], techStack: [] });

  const update = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      <TextInputCustom label="Name" value={formData.name} onChange={(v) => update("name", v)} />
      <TextInputCustom label="Email" value={formData.email} onChange={(v) => update("email", v)} />
      <TextInputCustom label="Degree" value={formData.degree} onChange={(v) => update("degree", v)} />

      <Text style={styles.label}>Skills</Text>
      {formData.skills.map(skill => (
        <Text key={skill} style={styles.chip}>• {skill}</Text>
      ))}

      <Button label="Save Profile" color="#10B981" onClick={() => onSave(formData)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  label: { fontWeight: "bold", marginTop: 10 },
  chip: { padding: 5, color: '#555' }
});
