import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Plus, Camera, FileText, Wifi } from 'lucide-react-native';

export default function PatientDashboard() {
  const router = useRouter();

  const activePrescriptions = [
    {
      id: '1',
      name: 'Amoxicillin',
      dosage: '500mg',
      frequency: '3 times daily',
      remainingDays: 5,
      nextDose: '2 hours',
    },
    {
      id: '2',
      name: 'Ibuprofen',
      dosage: '400mg',
      frequency: 'As needed',
      remainingDays: 7,
      nextDose: 'When needed',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800' }}
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.welcomeText}>Welcome back, Sarah</Text>
          <Text style={styles.subtitle}>Your medications for today</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/(patient)/add-prescription')}
        >
          <Plus size={24} color="#4c669f" />
          <Text style={styles.actionButtonText}>Add New</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/(patient)/scan')}
        >
          <Camera size={24} color="#4c669f" />
          <Text style={styles.actionButtonText}>Scan</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/(patient)/dispenser')}
        >
          <Wifi size={24} color="#4c669f" />
          <Text style={styles.actionButtonText}>Dispenser</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Prescriptions</Text>
        {activePrescriptions.map((prescription) => (
          <TouchableOpacity
            key={prescription.id}
            style={styles.prescriptionCard}
            onPress={() => router.push(`/(patient)/prescription/${prescription.id}`)}
          >
            <View style={styles.prescriptionHeader}>
              <FileText size={24} color="#4c669f" />
              <View style={styles.prescriptionInfo}>
                <Text style={styles.medicationName}>{prescription.name}</Text>
                <Text style={styles.dosageText}>{prescription.dosage} • {prescription.frequency}</Text>
              </View>
            </View>
            <View style={styles.prescriptionFooter}>
              <View style={styles.timeInfo}>
                <Text style={styles.timeLabel}>Next Dose</Text>
                <Text style={styles.timeValue}>{prescription.nextDose}</Text>
              </View>
              <View style={styles.timeInfo}>
                <Text style={styles.timeLabel}>Remaining</Text>
                <Text style={styles.timeValue}>{prescription.remainingDays} days</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.viewAllButton}
        onPress={() => router.push('/(patient)/history')}
      >
        <Text style={styles.viewAllText}>View All Prescriptions</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  welcomeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  actionButtons: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#4c669f',
    marginTop: 8,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: '#333',
    marginBottom: 16,
  },
  prescriptionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  prescriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  prescriptionInfo: {
    marginLeft: 12,
    flex: 1,
  },
  medicationName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
  },
  dosageText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  prescriptionFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
    marginTop: 12,
  },
  timeInfo: {
    flex: 1,
  },
  timeLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  timeValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#4c669f',
  },
  viewAllButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#4c669f',
    borderRadius: 12,
    alignItems: 'center',
  },
  viewAllText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});