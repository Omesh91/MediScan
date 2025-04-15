import { Stack } from 'expo-router';

export default function PatientLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="add-prescription"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
          title: 'Add Prescription',
          presentation: 'modal',
        }}
      />
      <Stack.Screen 
        name="manual-entry"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
          title: 'Manual Entry',
          presentation: 'modal',
        }}
      />
      <Stack.Screen 
        name="scan-review"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
          title: 'Review Scan',
          presentation: 'modal',
        }}
      />
      <Stack.Screen 
        name="dispenser"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
          title: 'Smart Dispenser',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}