import { Link, Stack } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Stack.Screen options={{ title: "Life Buddy AI" }} />

      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
          headerImage={
            <Image
              source={require("@/assets/images/partial-react-logo.png")}
              style={styles.reactLogo}
              resizeMode="contain"
            />
          }
        >
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Life Buddy AI</ThemedText>
            <HelloWave />
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Try it out today!</ThemedText>
            <ThemedText>
              Life Buddy AI will take you to new heights.{" "}
              <ThemedText type="defaultSemiBold">
                {Platform.select({
                  ios: "cmd + d",
                  android: "cmd + m",
                  web: "F12",
                })}
              </ThemedText>{" "}
              to open developer tools.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <Link href="/modal">
              <ThemedText type="subtitle">
                The best AI app for self improvement and productivity
              </ThemedText>
            </Link>

            <ThemedText>{`It will transform your life ^ ^`}</ThemedText>
          </ThemedView>

          {/* Spacer so content isn't hidden behind input */}
          <View style={{ height: 90 }} />
        </ParallaxScrollView>

        {/* 🔥 Fixed Bottom Input Bar */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.chatInput}
            onChangeText={setText}
            value={text}
            placeholder="Ask Life Buddy..."
            placeholderTextColor="#999"
          />

          <TouchableOpacity style={styles.sendButton}>
            <ThemedText style={{ color: "#fff", fontWeight: "600" }}>
              Send
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  // 🔥 Bottom input bar styles
  inputBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
  },
  chatInput: {
    flex: 1,
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 22,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    color: "#000",
  },
  sendButton: {
    marginLeft: 10,
    height: 44,
    paddingHorizontal: 18,
    borderRadius: 22,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
