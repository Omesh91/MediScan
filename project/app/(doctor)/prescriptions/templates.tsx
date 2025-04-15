import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FileText, Plus } from 'lucide-react-native';

const DUMMY_TEMPLATES = [
  {
    id: '1',
    name: 'Common Cold Treatment',
    medications: [
      { name: 'Acetaminophen 500mg', dosage: '1 tablet every 6 hours' },
      { name: 'Pseudoephedrine 30mg', dosage: '1 tablet every 12 hours' },
    ],
  },
  {
    id: '2',
    name: 'Hypertension Basic',
    medications: [
      { name: 'Lisinopril 10mg', dosage: '1 tablet daily' },
      { name: 'Hydrochlorothiazide 12.5mg', dosage: '1 tablet daily' },
    ],
  },
];

export default function PrescriptionTemplates() {
  const router = useRouter();

  const renderTemplate = ({ item: template }) => (
    <TouchableOpacity 
      style={styles.templateCard}
      onPress={() => {
        // Use template to create new prescription
        router.push('/(doctor)/prescriptions/new');
      }}
    >
      <View style={styles.templateHeader}>
        <FileText size={24} color="#4c669f" />
        <Text style={styles.templateName}>{template.name}</Text>
      </View>
      
      <View style={styles.medicationsList}>
        {template.medications.map((med, index) => (
          <View key={index} style={styles.medicationItem}>
            <Text style={styles.medicationName}>{med.name}</Text>
            <Text style={styles.medicationDosage}>{med.dosage}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_TEMPLATES}
        renderItem={renderTemplate}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity style={styles.fab}>
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
  list: {
    padding: 16,
    gap: 16,
  },
  templateCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  templateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  templateName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
  },
  medicationsList: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    gap: 8,
  },
  medicationItem: {
    marginBottom: 8,
  },
  medicationName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#333',
  },
  medicationDosage: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
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