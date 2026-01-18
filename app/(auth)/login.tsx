import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Buddy AI</Text>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      {/* 👇 RIGHT HERE */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 24 },
//   title: { fontSize: 28, marginBottom: 24, textAlign: 'center' },
//   input: { borderWidth: 1, padding: 12, marginBottom: 16 },
//   button: { backgroundColor: '#007AFF', padding: 16, alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: '600' },
// });
