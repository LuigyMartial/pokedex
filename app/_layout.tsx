import { Stack } from "expo-router";

export default function RootLayout() {

  return (
      <Stack>
        // @ts-ignore
        <Stack.Screen
            name="index"
            options={{
                title: "Home",
                headerTitleAlign: "center",
            }}
        />

        <Stack.Screen
            name="details"
            options={{
              title: "Details",
              presentation: "formSheet",
              sheetAllowedDetents: [0.3, 0.5, 0.7],
              sheetGrabberVisible: true
        }}

        />
      </Stack>
  );
}
