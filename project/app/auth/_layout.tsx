import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="doctor" 
        options={{
          title: 'Doctor Portal',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
        }}
      />
      <Stack.Screen 
        name="patient" 
        options={{
          title: 'Patient Portal',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
        }}
      />
      <Stack.Screen 
        name="forgot-password" 
        options={{
          title: 'Reset Password',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
        }}
      />
      <Stack.Screen 
        name="verify-email" 
        options={{
          title: 'Verify Email',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#4c669f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Inter_600SemiBold',
          },
        }}
      />
    </Stack>
  );
}