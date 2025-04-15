import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { LogOut, User, Bell, Shield, ChevronRight } from 'lucide-react-native';

export default function DoctorSettings() {
  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.profileSection}
        onPress={() => router.push('/(doctor)/profile')}
      >
        <View style={styles.avatar}>
          <User size={40} color="#4c669f" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Dr. John Smith</Text>
          <Text style={styles.email}>john.smith@example.com</Text>
        </View>
        <ChevronRight size={24} color="#666" />
      </TouchableOpacity>

      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Bell size={24} color="#4c669f" />
          <Text style={styles.optionText}>Notifications</Text>
          <ChevronRight size={20} color="#666" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Shield size={24} color="#4c669f" />
          <Text style={styles.optionText}>Privacy & Security</Text>
          <ChevronRight size={20} color="#666" style={styles.chevron} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={24} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e8eaf6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#333',
  },
  chevron: {
    marginLeft: 8,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 20,
    gap: 8,
  },
  logoutText: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  },
});