import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DOCTOR_PROFILE = {
  name: 'Dr. John Smith',
  specialization: 'General Practitioner',
  experience: '15 years',
  education: 'MD - Harvard Medical School',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
  stats: {
    patients: 1500,
    prescriptions: 3200,
    rating: 4.8,
  },
  availability: {
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    wednesday: '9:00 AM - 5:00 PM',
    thursday: '9:00 AM - 5:00 PM',
    friday: '9:00 AM - 3:00 PM',
  },
};

export default function DoctorProfile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: DOCTOR_PROFILE.image }} style={styles.profileImage} />
        <Text style={styles.name}>{DOCTOR_PROFILE.name}</Text>
        <Text style={styles.specialization}>{DOCTOR_PROFILE.specialization}</Text>
        <Text style={styles.education}>{DOCTOR_PROFILE.education}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{DOCTOR_PROFILE.stats.patients}</Text>
          <Text style={styles.statLabel}>Patients</Text>
        </View>
        <View style={[styles.statItem, styles.statBorder]}>
          <Text style={styles.statNumber}>{DOCTOR_PROFILE.stats.prescriptions}</Text>
          <Text style={styles.statLabel}>Prescriptions</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{DOCTOR_PROFILE.stats.rating}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.sectionContent}>{DOCTOR_PROFILE.experience}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Availability</Text>
        {Object.entries(DOCTOR_PROFILE.availability).map(([day, hours]) => (
          <View key={day} style={styles.scheduleItem}>
            <Text style={styles.scheduleDay}>{day.charAt(0).toUpperCase() + day.slice(1)}</Text>
            <Text style={styles.scheduleHours}>{hours}</Text>
          </View>
        ))}
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    color: '#333',
    marginBottom: 4,
  },
  specialization: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  education: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4c669f',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 16,
    padding: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#eee',
  },
  statNumber: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    color: '#4c669f',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 12,
  },
  sectionContent: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  scheduleDay: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#333',
  },
  scheduleHours: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
  },
});