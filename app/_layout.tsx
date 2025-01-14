import "../global.css"

import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { MessagesProvider } from "~/hooks/useMessages"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(drawer)",
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MessagesProvider>
        <Stack screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          {/*<Stack.Screen name="modal" options={{ title: "Modal", presentation: "modal" }} />*/}
        </Stack>
      </MessagesProvider>
    </GestureHandlerRootView>
  )
}
