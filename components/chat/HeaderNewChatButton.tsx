import { Entypo } from "@expo/vector-icons"
import { forwardRef } from "react"
import { Pressable, StyleSheet } from "react-native"
import { router } from "expo-router";

export const HeaderNewChatButton = forwardRef<typeof Pressable, { onPress?: () => void }>(
  ({ onPress }, ref) => {
    return (
      <Pressable
        onPress={() => {
          const newChatId = `chat-${Date.now()}`
          router.push(`/chat/${newChatId}`)
        }}>
        {({ pressed }) => (
          <Entypo
            name="new-message"
            size={18}
            color="red"
            style={[
              styles.headerRight,
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          />
        )}
      </Pressable>
    )
  }
)

export const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
})
