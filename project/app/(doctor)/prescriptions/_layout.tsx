import { Stack } from 'expo-router';

export default function PrescriptionsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="templates"
        options={{ 
          title: 'Templates',
          presentation: 'modal',
        }}
      />
      <Stack.Screen 
        name="new"
        options={{ 
          title: 'New Prescription',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}