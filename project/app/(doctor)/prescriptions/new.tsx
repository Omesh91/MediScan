import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Plus, Minus, Send } from 'lucide-react-native';

export default function NewPrescription() {
  const router = useRouter();
  const [medications, setMedications] = useState([{ name: '', dosage: '', instructions: '' }]);

  const addMedication = () => {
    setMedications([...medications, { name: '', dosage: '', instructions: '' }]);
  };

  const removeMedication = (index: number) => {
    if (medications.length > 1) {
      setMedications(medications.filter((_, i) => i !== index));
    }
  };

  const updateMedication = (index: number, field: string, value: string) => {
    const updatedMedications = [...medications];
    updatedMedications[index] = { ...updatedMedications[index], [field]: value };
    setMedications(updatedMedications);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Patient Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Patient Name"
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="Patient ID"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medications</Text>
          {medications.map((medication, index) => (
            <View key={index} style={styles.medicationContainer}>
              <View style={styles.medicationHeader}>
                <Text style={styles.medicationTitle}>Medication {index + 1}</Text>
                {medications.length > 1 && (
                  <TouchableOpacity
                    onPress={() => removeMedication(index)}
                    style={styles.removeButton}
                  >
                    <Minus size={20} color="#dc3545" />
                  </TouchableOpacity>
                )}
              </View>
              
              <TextInput
                style={styles.input}
                placeholder="Medication Name"
                value={medication.name}
                onChangeText={(value) => updateMedication(index, 'name', value)}
                placeholderTextColor="#666"
              />
              
              <TextInput
                style={styles.input}
                placeholder="Dosage (e.g., 500mg)"
                value={medication.dosage}
                onChangeText={(value) => updateMedication(index, 'dosage', value)}
                placeholderTextColor="#666"
              />
              
              <TextInput
                style={[styles.input, styles.instructionsInput]}
                placeholder="Instructions"
                value={medication.instructions}
                onChangeText={(value) => updateMedication(index, 'instructions', value)}
                multiline
                placeholderTextColor="#666"
              />
            </View>
          ))}

          <TouchableOpacity style={styles.addButton} onPress={addMedication}>
            <Plus size={20} color="#4c669f" />
            <Text style={styles.addButtonText}>Add Another Medication</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Notes</Text>
          <TextInput
            style={[styles.input, styles.notesInput]}
            placeholder="Add any additional notes or instructions"
            multiline
            placeholderTextColor="#666"
          />
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.button, styles.cancelButton]}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.sendButton]}>
          <Send size={20} color="#fff" />
          <Text style={styles.sendButtonText}>Send Prescription</Text>
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
  form: {
    padding: 16,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  instructionsInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  notesInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  medicationContainer: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  medicationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  medicationTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    padding: 4,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    gap: 8,
  },
  addButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#4c669f',
  },
  actions: {
    flexDirection: 'row',
    padding: 16,
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
  cancelButton: {
    backgroundColor: '#f8f9fa',
  },
  cancelButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#666',
  },
  sendButton: {
    backgroundColor: '#4c669f',
  },
  sendButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});