import { Tabs, Stack } from 'expo-router';
import { Users, FileText, MessageSquare, Settings } from 'lucide-react-native';

export default function DoctorLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="patient/[id]"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
          title: 'Patient Details',
          presentation: 'push',
        }}
      />
      <Stack.Screen 
        name="prescriptions/new"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
          title: 'New Prescription',
          presentation: 'modal',
        }}
      />
      <Stack.Screen 
        name="prescriptions/templates"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
          title: 'Prescription Templates',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}