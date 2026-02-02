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

import { ViewStyle } from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("");

  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (text.trim() === "") return;

    setMessages((prev) => [...prev, text]);
    setText(""); // clear
    console.log(messages);
  };
  const CHAT_WIDTH: ViewStyle = {
    width: "85%", // or 85% if you want tighter
    maxWidth: 1000, // stops it getting huge on tablets/web
    alignSelf: "center", // 👈 centers it like the input bar
  };

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
          <ThemedView style={[styles.titleContainer, CHAT_WIDTH]}>
            <ThemedText type="title">Life Buddy AI</ThemedText>
            <HelloWave />
          </ThemedView>

          {/* Homepage Image */}
          <Image
            source={require("@/assets/images/chatbot.png")}
            style={styles.mainImage}
            resizeMode="contain"
          />

          <ThemedView style={[styles.stepContainer, CHAT_WIDTH]}>
            <Link href="/modal">
              <ThemedText type="subtitle">Hi, I'm Life Buddy AI</ThemedText>
            </Link>

            <ThemedText>{`I’m here to guide you and keep you company on your life’s journey.`}</ThemedText>
          </ThemedView>

          {/* Text Output */}
          <ThemedView style={[styles.messagesContainer, CHAT_WIDTH]}>
            {messages.map((msg, index) => {
              const isRight = index % 2 === 0;

              return (
                <View
                  key={index}
                  style={
                    isRight
                      ? styles.messageBubbleRight
                      : styles.messageBubbleLeft
                  }
                >
                  <ThemedText
                    style={
                      isRight ? styles.messageTextRight : styles.messageTextLeft
                    }
                  >
                    {msg}
                  </ThemedText>
                </View>
              );
            })}
          </ThemedView>

          {/* Spacer so content isn't hidden behind input */}
          <View style={{ height: 90 }} />
        </ParallaxScrollView>

        {/* 🔥 Fixed Bottom Input Bar */}
        <View style={[styles.inputBar, CHAT_WIDTH]}>
          {/* 🧠 Avatar / Icon */}
          <Image
            source={require("@/assets/images/favicon.png")} // put your image here
            style={styles.avatar}
          />

          <TextInput
            style={styles.chatInput}
            onChangeText={setText}
            value={text}
            placeholder="Message life buddy..."
            placeholderTextColor="#999"
            returnKeyType="send"
            blurOnSubmit={false}
            onSubmitEditing={handleSend}
            // toggle to allow for sending with enter key
            multiline={false}
          />

          {/* Send Button */}
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
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
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },

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
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#f8f8f8",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },

  chatInput: {
    flex: 1,
    height: 36, // was 44
    backgroundColor: "#fff",
    borderRadius: 18, // was 22
    paddingHorizontal: 12, // was 16
    borderWidth: 1,
    borderColor: "#ddd",
    color: "#000",
    textAlignVertical: "center", // 👈 this centers the placeholder AND typed text
  },

  mainImage: {
    width: "100%",
    height: 200, // big enough to actually see
    marginVertical: 16,
    alignSelf: "center",
  },

  messageBubbleRight: {
    alignSelf: "flex-end", // 👈 pushes bubble to the right
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 8,
    maxWidth: "80%", // prevents full-width bullshit
  },

  messageBubbleLeft: {
    alignSelf: "flex-start", // 👈 left side
    backgroundColor: "#e5e5ea",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 8,
    maxWidth: "80%",
  },

  messagesContainer: {
    paddingVertical: 16,
  },

  messageTextRight: {
    color: "#fff",
    textAlign: "right", // 👈 aligns text inside bubble
  },

  messageTextLeft: {
    color: "#000",
    textAlign: "left",
  },

  sendButton: {
    marginLeft: 8, // was 10
    height: 36, // was 44
    paddingHorizontal: 14, // was 18
    borderRadius: 18, // was 22
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

// OLD CODE
// import { Redirect } from "expo-router";
// export default function Index() {
//   return <Redirect href="/(tabs)/homepage" />;
// }
