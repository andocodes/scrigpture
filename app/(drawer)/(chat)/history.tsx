import { View, Text, Pressable, FlatList } from "react-native"
import { Container } from "~/components/Container"
import { useRouter } from "expo-router"
import mockChats from "~/mocks/chats.json"

interface ChatMessage {
  id: string
  content: string
  isUser: boolean
  timestamp: string
}

interface Chat {
  id: string
  title: string
  lastMessage: string
  timestamp: string
  messages: ChatMessage[]
}

// Type assertion for our mock data
const chats = (mockChats as { chats: Chat[] }).chats

export default function HistoryScreen() {
  const router = useRouter()

  return (
    <Container>
      <FlatList
        data={chats}
        className="flex-1"
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Pressable
            className="p-4 bg-white rounded-lg mb-2 shadow-sm"
            onPress={() => router.push(`/chat/${item.id}`)}
          >
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-gray-600 mt-1">{item.lastMessage}</Text>
            <Text className="text-gray-400 text-sm mt-2">
              {new Date(item.timestamp).toLocaleDateString()}
            </Text>
          </Pressable>
        )}
      />
    </Container>
  )
}
