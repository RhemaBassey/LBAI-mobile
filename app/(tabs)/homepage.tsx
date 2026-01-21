import { Link, Stack } from "expo-router";
import React, { useState } from "react"; // Added useState to handle text
import { Image, Platform, StyleSheet, TextInput } from "react-native"; // Added TextInput here

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  const [text, setText] = useState(""); // State to store your input

  return (
    <>
      <Stack.Screen options={{ title: "My App :)" }} />

      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Life Buddy AI Here To Help</ThemedText>
          <HelloWave />
        </ThemedView>

        {/* --- NEW INPUT SECTION --- */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Ask Life Buddy</ThemedText>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Type your goals here..."
            placeholderTextColor="#888"
          />
          <ThemedText type="defaultSemiBold">You typed: {text}</ThemedText>
        </ThemedView>
        {/* ------------------------- */}

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
      </ParallaxScrollView>
    </>
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
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  // Added styling for the text input
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: Platform.select({ ios: "black", android: "black", web: "black" }), // Ensure text is visible
    backgroundColor: "#fff",
  },
});
