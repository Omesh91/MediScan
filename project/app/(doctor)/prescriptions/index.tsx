import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { FileText, Plus, LayoutTemplate as BookTemplate } from 'lucide-react-native';

const DUMMY_PRESCRIPTIONS = [
  {
    id: '1',
    patientName: 'Sarah Johnson',
    date: '2024-02-20',
    medications: ['Amoxicillin 500mg', 'Ibuprofen 400mg'],
    status: 'sent',
  },
  {
    id: '2',
    patientName: 'Michael Chen',
    date: '2024-02-18',
    medications: ['Metformin 1000mg', 'Lisinopril 10mg'],
    status: 'pending',
  },
];

export default function Prescriptions() {
  const router = useRouter();

  const renderPrescription = ({ item: prescription }) => (
    <TouchableOpacity 
      style={styles.prescriptionCard}
      onPress={() => router.push(`/(doctor)/prescriptions/${prescription.id}`)}
    >
      <View style={styles.cardHeader}>
        <FileText size={24} color="#4c669f" />
        <View style={[
          styles.statusBadge,
          { backgroundColor: prescription.status === 'sent' ? '#e8f5e9' : '#fff3e0' }
        ]}>
          <Text style={[
            styles.statusText,
            { color: prescription.status === 'sent' ? '#2e7d32' : '#f57c00' }
          ]}>
            {prescription.status === 'sent' ? 'Sent' : 'Pending'}
          </Text>
        </View>
      </View>

      <Text style={styles.patientName}>{prescription.patientName}</Text>
      <Text style={styles.date}>{prescription.date}</Text>
      
      <View style={styles.medicationList}>
        {prescription.medications.map((med, index) => (
          <Text key={index} style={styles.medication}>• {med}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => router.push('/(doctor)/prescriptions/templates')}
        >
          <BookTemplate size={20} color="#4c669f" />
          <Text style={styles.headerButtonText}>Templates</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.headerButton, styles.newButton]}
          onPress={() => router.push('/(doctor)/prescriptions/new')}
        >
          <Plus size={20} color="#fff" />
          <Text style={[styles.headerButtonText, styles.newButtonText]}>
            New Prescription
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DUMMY_PRESCRIPTIONS}
        renderItem={renderPrescription}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    gap: 8,
  },
  headerButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#4c669f',
  },
  newButton: {
    backgroundColor: '#4c669f',
  },
  newButtonText: {
    color: '#fff',
  },
  list: {
    padding: 16,
    gap: 16,
  },
  prescriptionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
  },
  patientName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  medicationList: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
  },
  medication: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
});