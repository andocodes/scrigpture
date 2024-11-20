import { Stack } from "expo-router"

import { Container } from "~/components/Container"
import { ScreenContent } from "~/components/ScreenContent"

export default function FavouritesScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Favourites" }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/favourites.tsx" title="Favourites" />
      </Container>
    </>
  )
}
