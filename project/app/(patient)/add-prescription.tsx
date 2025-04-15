import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Camera, FileText, Smartphone } from 'lucide-react-native';

export default function AddPrescription() {
  const router = useRouter();

  const methods = [
    {
      id: 'scan',
      title: 'Scan Prescription',
      description: 'Use your camera to scan a paper prescription',
      icon: Camera,
      route: '/(patient)/scan',
    },
    {
      id: 'manual',
      title: 'Manual Entry',
      description: 'Manually enter prescription details',
      icon: FileText,
      route: '/(patient)/manual-entry',
    },
    {
      id: 'dispenser',
      title: 'Connect Dispenser',
      description: 'Connect to a smart medication dispenser',
      icon: Smartphone,
      route: '/(patient)/dispenser',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Prescription</Text>
      <Text style={styles.subtitle}>Choose how you'd like to add your prescription</Text>

      {methods.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={styles.methodCard}
          onPress={() => router.push(method.route)}
        >
          <method.icon size={32} color="#4c669f" />
          <View style={styles.methodInfo}>
            <Text style={styles.methodTitle}>{method.title}</Text>
            <Text style={styles.methodDescription}>{method.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  methodInfo: {
    marginLeft: 16,
    flex: 1,
  },
  methodTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  methodDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
  },
});