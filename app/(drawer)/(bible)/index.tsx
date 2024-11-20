import { FlashList } from "@shopify/flash-list"
import { Text, View } from "react-native"
import { Button } from "~/components/Button"
import { Container } from "~/components/Container"

const BIBLE_BOOKS = [
  { id: "1", name: "Genesis", chapters: 50 },
  { id: "2", name: "Exodus", chapters: 40 },
  { id: "3", name: "Leviticus", chapters: 27 },
  { id: "4", name: "Numbers", chapters: 36 },
  { id: "5", name: "Deuteronomy", chapters: 34 },
]

export default function BibleScreen() {
  return (
    <Container>
      <View className="flex-1">
        <FlashList
          data={BIBLE_BOOKS}
          estimatedItemSize={100}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={({ item }) => (
            <View className="p-4 bg-white rounded-lg shadow-sm">
              <Text className="text-lg font-semibold">{item.name}</Text>
              <Text className="text-gray-600 mb-3">{item.chapters} chapters</Text>
              <Button
                title="Read Book"
                onPress={() => {
                  // Handle opening book
                }}
              />
            </View>
          )}
        />
      </View>
    </Container>
  )
}
