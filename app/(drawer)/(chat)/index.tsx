import { useState, useRef } from "react"
import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { Container } from "~/components/Container"
import { Message } from "~/components/chat/Message"
import { ChatInput } from "~/components/chat/ChatInput"

interface ChatMessage {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const scrollViewRef = useRef<ScrollView>(null)

  const handleSend = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "Hello there! I am scriGPTure, your Bible study assistant. How can I help you today?",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <Container>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 px-4"
          contentContainerStyle={{ paddingVertical: 16 }}
          onContentSizeChange={() => {
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }}
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              content={message.content}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
        </ScrollView>

        <ChatInput onSend={handleSend} />
      </KeyboardAvoidingView>
    </Container>
  )
}
