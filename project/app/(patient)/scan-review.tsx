import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Check, X } from 'lucide-react-native';

export default function ScanReview() {
  const { image } = useLocalSearchParams();
  const router = useRouter();

  const prescriptionData = {
    medication: 'Amoxicillin',
    dosage: '500mg',
    frequency: '3 times daily',
    duration: '7 days',
    doctor: 'Dr. John Smith',
    date: '2024-02-25',
  };

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: image as string }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Review Prescription</Text>
        <Text style={styles.subtitle}>Please verify the extracted information</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Medication</Text>
            <Text style={styles.value}>{prescriptionData.medication}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Dosage</Text>
            <Text style={styles.value}>{prescriptionData.dosage}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Frequency</Text>
            <Text style={styles.value}>{prescriptionData.frequency}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.value}>{prescriptionData.duration}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Doctor</Text>
            <Text style={styles.value}>{prescriptionData.doctor}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>{prescriptionData.date}</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]}
            onPress={() => router.back()}
          >
            <X size={24} color="#dc3545" />
            <Text style={[styles.buttonText, styles.cancelText]}>Retake</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.confirmButton]}
            onPress={() => router.push('/(patient)')}
          >
            <Check size={24} color="#fff" />
            <Text style={[styles.buttonText, styles.confirmText]}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#000',
  },
  content: {
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
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#dc3545',
  },
  cancelText: {
    color: '#dc3545',
  },
  confirmButton: {
    backgroundColor: '#4c669f',
  },
  confirmText: {
    color: '#fff',
  },
});