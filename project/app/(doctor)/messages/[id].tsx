import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { Send } from 'lucide-react-native';

const DUMMY_MESSAGES = [
  {
    id: '1',
    text: 'Hello Dr. Smith, I have a question about my prescription.',
    sender: 'patient',
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    text: 'Of course, how can I help you?',
    sender: 'doctor',
    timestamp: '10:31 AM',
  },
  {
    id: '3',
    text: 'Should I take the medication with food or on an empty stomach?',
    sender: 'patient',
    timestamp: '10:32 AM',
  },
  {
    id: '4',
    text: 'Please take it with food to avoid stomach upset. It\'s best to take it with breakfast.',
    sender: 'doctor',
    timestamp: '10:33 AM',
  },
];

export default function ChatScreen() {
  const [messages] = useState(DUMMY_MESSAGES);
  const [newMessage, setNewMessage] = useState('');

  const renderMessage = ({ item: message }) => (
    <View style={[
      styles.messageContainer,
      message.sender === 'doctor' ? styles.doctorMessage : styles.patientMessage
    ]}>
      <Text style={styles.messageText}>{message.text}</Text>
      <Text style={styles.timestamp}>{message.timestamp}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        inverted={false}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <Send size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesList: {
    padding: 16,
    gap: 8,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  doctorMessage: {
    backgroundColor: '#4c669f',
    alignSelf: 'flex-end',
    borderTopRightRadius: 4,
  },
  patientMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 4,
  },
  messageText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  timestamp: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 100,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4c669f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});