import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { Wifi, WifiOff, Power, Settings as SettingsIcon } from 'lucide-react-native';

export default function DispenserControl() {
  const [isConnected, setIsConnected] = useState(false);
  const [dispensers] = useState([
    { id: '1', name: 'Kitchen Dispenser', status: 'active', battery: 85 },
    { id: '2', name: 'Bedroom Dispenser', status: 'inactive', battery: 62 },
  ]);

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  const renderDispenser = ({ item: dispenser }) => (
    <View style={styles.dispenserCard}>
      <View style={styles.dispenserHeader}>
        <View>
          <Text style={styles.dispenserName}>{dispenser.name}</Text>
          <Text style={[
            styles.statusText,
            { color: dispenser.status === 'active' ? '#4CAF50' : '#666' }
          ]}>
            {dispenser.status === 'active' ? 'Connected' : 'Disconnected'}
          </Text>
        </View>
        <View style={styles.batteryIndicator}>
          <Text style={styles.batteryText}>{dispenser.battery}%</Text>
          <View style={[styles.batteryLevel, { width: `${dispenser.battery}%` }]} />
        </View>
      </View>

      <View style={styles.dispenserControls}>
        <TouchableOpacity style={styles.controlButton}>
          <Power size={20} color="#4c669f" />
          <Text style={styles.controlText}>Power</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <SettingsIcon size={20} color="#4c669f" />
          <Text style={styles.controlText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Smart Dispensers</Text>
        <TouchableOpacity
          style={[styles.connectionButton, isConnected ? styles.connected : styles.disconnected]}
          onPress={toggleConnection}
        >
          {isConnected ? (
            <Wifi size={24} color="#fff" />
          ) : (
            <WifiOff size={24} color="#fff" />
          )}
          <Text style={styles.connectionText}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dispensers}
        renderItem={renderDispenser}
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
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 16,
  },
  connectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  connected: {
    backgroundColor: '#4CAF50',
  },
  disconnected: {
    backgroundColor: '#666',
  },
  connectionText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  list: {
    padding: 16,
    gap: 16,
  },
  dispenserCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dispenserHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dispenserName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  statusText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
  batteryIndicator: {
    width: 60,
    height: 24,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  batteryLevel: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#4CAF50',
    opacity: 0.3,
  },
  batteryText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
    zIndex: 1,
  },
  dispenserControls: {
    flexDirection: 'row',
    gap: 12,
  },
  controlButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    gap: 8,
  },
  controlText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#4c669f',
  },
});