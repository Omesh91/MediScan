import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronRight } from 'lucide-react-native';

const INTRO_SLIDES = [
  {
    id: 1,
    title: 'Digital Prescriptions',
    description: 'Manage all your medical prescriptions digitally in one secure place',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800',
  },
  {
    id: 2,
    title: 'Easy Scanning',
    description: 'Quickly scan and digitize your paper prescriptions',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
  },
  {
    id: 3,
    title: 'Smart Dispensing',
    description: 'Connect with smart dispensers for automated medication delivery',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800',
  },
];

export default function IntroScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Image
            source={{ uri: INTRO_SLIDES[0].image }}
            style={styles.heroImage}
          />
          
          <View style={styles.textContainer}>
            <Text style={styles.title}>{INTRO_SLIDES[0].title}</Text>
            <Text style={styles.description}>{INTRO_SLIDES[0].description}</Text>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            <ChevronRight size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 40,
  },
  heroImage: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginTop: 40,
  },
  textContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    color: '#fff',
    opacity: 0.8,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    gap: 10,
  },
  buttonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 18,
  },
});