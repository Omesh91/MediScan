import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { CircleCheck as CheckCircle2, RefreshCw } from 'lucide-react-native';

export default function VerifyEmail() {
  const handleResend = () => {
    // Implement resend verification logic
  };

  const handleContinue = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <CheckCircle2 size={60} color="#4c669f" />
        </View>
        
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.description}>
          We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
        </Text>

        <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
          <RefreshCw size={20} color="#4c669f" />
          <Text style={styles.resendText}>Resend Verification Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e8eaf6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    gap: 8,
  },
  resendText: {
    color: '#4c669f',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4c669f',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  },
});