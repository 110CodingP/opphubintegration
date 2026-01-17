import React, { useState } from 'react';
import TextInput from './components/TextInput'; 
import Button from './components/Button';
import UserProfile from "./components/UserProfile";

export default function App() {
  const [profile, setProfile] = useState({
  name: "",
  email: "",
  degree: "",
  skills: [],
  techStack: []
});

return (
  <UserProfile
    profileData={profile}
    onSave={(data) => {
      console.log("Saved profile:", data);
      setProfile(data);
    }}
  />
);

}