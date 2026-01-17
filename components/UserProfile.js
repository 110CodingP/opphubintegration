import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import TextInput from "./TextInput";
import Button from "./Button";

export default function UserProfile({ profileData, onSave }) {
  const [formData, setFormData] = useState(profileData);

  const update = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const addSkill = (skill) => {
    if (!formData.skills.includes(skill)) {
      update("skills", [...formData.skills, skill]);
    }
  };

  const removeSkill = (skill) => {
    update("skills", formData.skills.filter(s => s !== skill));
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Your Profile</Text>

      <TextInput
        label="Name"
        value={formData.name}
        onChange={(v) => update("name", v)}
      />

      <TextInput
        label="Email"
        value={formData.email}
        onChange={(v) => update("email", v)}
      />

      <TextInput
        label="Degree"
        value={formData.degree}
        onChange={(v) => update("degree", v)}
      />

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Skills</Text>
      {formData.skills.map(skill => (
        <Text key={skill} onPress={() => removeSkill(skill)}>
          ❌ {skill}
        </Text>
      ))}

      <TextInput
        label="Add skill"
        onChange={(v) => addSkill(v)}
      />

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Tech Stack</Text>
      {formData.techStack.map(tech => (
        <Text key={tech}>• {tech}</Text>
      ))}

      <TextInput
        label="Add tech"
        onChange={(v) => update("techStack", [...formData.techStack, v])}
      />

      <Button
        label="Save Profile"
        color="green"
        onPress={() => onSave(formData)}
      />
    </ScrollView>
  );
}