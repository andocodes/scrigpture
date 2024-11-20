import { Stack } from "expo-router"

import { Container } from "~/components/Container"
import { ScreenContent } from "~/components/ScreenContent"

export default function BibleScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Bible" }} />
      <Container>
        <ScreenContent path="app/(drawer)/(bible)/index.tsx" title="Bible" />
      </Container>
    </>
  )
}
