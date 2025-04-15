import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Plus, Search, Filter } from 'lucide-react-native';

const DUMMY_PATIENTS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 28,
    lastVisit: '2024-02-20',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    condition: 'Hypertension',
    nextAppointment: '2024-03-15',
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 35,
    lastVisit: '2024-02-18',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    condition: 'Type 2 Diabetes',
    nextAppointment: '2024-03-10',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    age: 42,
    lastVisit: '2024-02-15',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    condition: 'Asthma',
    nextAppointment: '2024-03-05',
  },
];

export default function PatientList() {
  const router = useRouter();
  const [patients] = useState(DUMMY_PATIENTS);

  const renderPatient = ({ item: patient }) => (
    <TouchableOpacity 
      style={styles.patientCard}
      onPress={() => router.push(`/(doctor)/patient/${patient.id}`)}
    >
      <Image source={{ uri: patient.image }} style={styles.patientImage} />
      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{patient.name}</Text>
        <Text style={styles.patientDetails}>Age: {patient.age}</Text>
        <Text style={styles.patientCondition}>{patient.condition}</Text>
        <View style={styles.appointmentBadge}>
          <Text style={styles.appointmentText}>Next: {patient.nextAppointment}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search patients..."
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#4c669f" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={patients}
        renderItem={renderPatient}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity 
        style={styles.fab}
        onPress={() => router.push('/(doctor)/new-patient')}
      >
        <Plus size={24} color="#fff" />
      </TouchableOpacity>
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
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 16,
    gap: 16,
  },
  patientCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    gap: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  patientImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  patientDetails: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  patientCondition: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4c669f',
    marginBottom: 8,
  },
  appointmentBadge: {
    backgroundColor: '#e8eaf6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  appointmentText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#4c669f',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4c669f',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});