import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FileText, Check, CircleAlert as AlertCircle } from 'lucide-react-native';

const PRESCRIPTION_HISTORY = [
  {
    id: '1',
    name: 'Amoxicillin 500mg',
    doctor: 'Dr. John Smith',
    date: '2024-02-20',
    status: 'completed',
    duration: '7 days',
  },
  {
    id: '2',
    name: 'Ibuprofen 400mg',
    doctor: 'Dr. Sarah Johnson',
    date: '2024-02-15',
    status: 'active',
    duration: '5 days',
  },
  {
    id: '3',
    name: 'Loratadine 10mg',
    doctor: 'Dr. Michael Chen',
    date: '2024-02-10',
    status: 'expired',
    duration: '30 days',
  },
];

export default function PrescriptionHistory() {
  const router = useRouter();

  const renderPrescription = ({ item: prescription }) => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case 'completed':
          return '#4CAF50';
        case 'active':
          return '#2196F3';
        case 'expired':
          return '#F44336';
        default:
          return '#666';
      }
    };

    const StatusIcon = ({ status }: { status: string }) => {
      switch (status) {
        case 'completed':
          return <Check size={20} color={getStatusColor(status)} />;
        case 'expired':
          return <AlertCircle size={20} color={getStatusColor(status)} />;
        default:
          return <FileText size={20} color={getStatusColor(status)} />;
      }
    };

    return (
      <TouchableOpacity
        style={styles.prescriptionCard}
        onPress={() => router.push(`/(patient)/prescription/${prescription.id}`)}
      >
        <View style={styles.cardHeader}>
          <StatusIcon status={prescription.status} />
          <View style={styles.headerInfo}>
            <Text style={styles.medicationName}>{prescription.name}</Text>
            <Text style={styles.doctorName}>{prescription.doctor}</Text>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.footerItem}>
            <Text style={styles.footerLabel}>Date</Text>
            <Text style={styles.footerValue}>{prescription.date}</Text>
          </View>
          <View style={styles.footerItem}>
            <Text style={styles.footerLabel}>Duration</Text>
            <Text style={styles.footerValue}>{prescription.duration}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(prescription.status)}15` }]}>
            <Text style={[styles.statusText, { color: getStatusColor(prescription.status) }]}>
              {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={PRESCRIPTION_HISTORY}
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
  list: {
    padding: 16,
    gap: 12,
  },
  prescriptionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerInfo: {
    marginLeft: 12,
    flex: 1,
  },
  medicationName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#333',
  },
  doctorName: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  footerItem: {
    flex: 1,
  },
  footerLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  footerValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#333',
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
});