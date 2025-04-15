import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FileText, Calendar, Plus, MessageSquare } from 'lucide-react-native';

// This would normally come from an API or database
const DUMMY_PATIENT = {
  id: '1',
  name: 'Sarah Johnson',
  age: 28,
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  condition: 'Hypertension',
  nextAppointment: '2024-03-15',
  bloodPressure: '120/80',
  weight: '65 kg',
  height: '170 cm',
  allergies: ['Penicillin', 'Peanuts'],
  medications: [
    {
      id: '1',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      startDate: '2024-01-15',
    },
    {
      id: '2',
      name: 'Amlodipine',
      dosage: '5mg',
      frequency: 'Once daily',
      startDate: '2024-01-15',
    },
  ],
};

export default function PatientDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const patient = DUMMY_PATIENT;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: patient.image }} style={styles.patientImage} />
        <Text style={styles.patientName}>{patient.name}</Text>
        <Text style={styles.patientDetails}>Age: {patient.age}</Text>
        <View style={styles.conditionBadge}>
          <Text style={styles.conditionText}>{patient.condition}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Vital Signs</Text>
        </View>
        <View style={styles.vitalsGrid}>
          <View style={styles.vitalItem}>
            <Text style={styles.vitalLabel}>Blood Pressure</Text>
            <Text style={styles.vitalValue}>{patient.bloodPressure}</Text>
          </View>
          <View style={styles.vitalItem}>
            <Text style={styles.vitalLabel}>Weight</Text>
            <Text style={styles.vitalValue}>{patient.weight}</Text>
          </View>
          <View style={styles.vitalItem}>
            <Text style={styles.vitalLabel}>Height</Text>
            <Text style={styles.vitalValue}>{patient.height}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Allergies</Text>
        </View>
        <View style={styles.allergiesList}>
          {patient.allergies.map((allergy, index) => (
            <View key={index} style={styles.allergyBadge}>
              <Text style={styles.allergyText}>{allergy}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Current Medications</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => router.push('/(doctor)/prescriptions/new')}
          >
            <Plus size={20} color="#4c669f" />
            <Text style={styles.addButtonText}>Add New</Text>
          </TouchableOpacity>
        </View>
        {patient.medications.map((medication) => (
          <View key={medication.id} style={styles.medicationCard}>
            <Text style={styles.medicationName}>{medication.name}</Text>
            <Text style={styles.medicationDetails}>
              {medication.dosage} • {medication.frequency}
            </Text>
            <Text style={styles.medicationDate}>
              Started: {medication.startDate}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: '#4c669f' }]}
          onPress={() => router.push('/(doctor)/prescriptions/new')}
        >
          <FileText size={24} color="#fff" />
          <Text style={styles.actionButtonText}>New Prescription</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: '#4CAF50' }]}
          onPress={() => {}}
        >
          <Calendar size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Schedule Visit</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: '#2196F3' }]}
          onPress={() => router.push(`/(doctor)/messages/${patient.id}`)}
        >
          <MessageSquare size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  patientImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  patientName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    color: '#333',
    marginBottom: 4,
  },
  patientDetails: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  conditionBadge: {
    backgroundColor: '#e8eaf6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  conditionText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#4c669f',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
  },
  vitalsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vitalItem: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  vitalLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  vitalValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#333',
  },
  allergiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  allergyBadge: {
    backgroundColor: '#ffebee',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  allergyText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#c62828',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#4c669f',
  },
  medicationCard: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  medicationName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  medicationDetails: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  medicationDate: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#666',
  },
  actions: {
    padding: 16,
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  actionButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});