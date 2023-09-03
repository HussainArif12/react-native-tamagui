import { useFonts } from "expo-font";
import { Button, Paragraph, TamaguiProvider, Theme, YStack } from "tamagui";
import config from "./tamagui.config";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={"dark"}>
        <YStack f={1} jc="center" ai="center" backgroundColor={"pink"}>
          <Paragraph color="black" jc="center" fontSize={50} lineHeight={80}>
            Black
          </Paragraph>
        </YStack>
      </Theme>
      <Theme name="light">
        <YStack f={1} ai="center" jc="center" backgroundColor="black">
          <Paragraph color="pink" jc="center" fontSize={50} lineHeight={80}>
            Pink
          </Paragraph>
        </YStack>
      </Theme>
      <Theme name="dark">
        <Button color={"$pink10Dark"}> I am a dark button</Button>
      </Theme>
    </TamaguiProvider>
  );
}
