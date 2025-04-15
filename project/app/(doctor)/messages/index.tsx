import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Search } from 'lucide-react-native';

const DUMMY_MESSAGES = [
  {
    id: '1',
    patientName: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    lastMessage: 'Thank you for the prescription, doctor.',
    time: '10:30 AM',
    unread: 2,
  },
  {
    id: '2',
    patientName: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    lastMessage: 'When should I take the new medication?',
    time: 'Yesterday',
    unread: 0,
  },
];

export default function Messages() {
  const router = useRouter();
  const [messages] = useState(DUMMY_MESSAGES);
  const [searchText, setSearchText] = useState('');

  const renderMessage = ({ item: message }) => (
    <TouchableOpacity 
      style={styles.messageCard}
      onPress={() => router.push(`/(doctor)/messages/${message.id}`)}
    >
      <Image source={{ uri: message.image }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.patientName}>{message.patientName}</Text>
          <Text style={styles.messageTime}>{message.time}</Text>
        </View>
        <Text 
          style={[styles.lastMessage, message.unread > 0 && styles.unreadMessage]}
          numberOfLines={1}
        >
          {message.lastMessage}
        </Text>
      </View>
      {message.unread > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadCount}>{message.unread}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={[styles.searchInput, Platform.select({ web: styles.searchInputWeb })]}
            placeholder="Search messages..."
            placeholderTextColor="#666"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
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
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchContainer: {
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
  searchInputWeb: {
    outlineStyle: 'none',
    border: 'none',
    backgroundColor: 'transparent',
  },
  list: {
    padding: 16,
    gap: 16,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    gap: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  patientName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#333',
  },
  messageTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#666',
  },
  lastMessage: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666',
  },
  unreadMessage: {
    fontFamily: 'Inter_600SemiBold',
    color: '#333',
  },
  unreadBadge: {
    backgroundColor: '#4c669f',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadCount: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#fff',
  },
});