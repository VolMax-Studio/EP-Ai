/**
 * EP-Ai - ElektroPlan AI
 * Copyright (c) 2025 VolMax Studio. All rights reserved.
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(50)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleGetStarted = () => {
    navigation.replace('Home');
  };

  const handleViewProjects = () => {
    navigation.navigate('Projects');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1a1a', '#2a2a2a', '#1a1a1a']}
        style={styles.gradient}
      >
        {/* VolMax Studio Branding */}
        <Animated.View 
          style={[
            styles.brandSection,
            { 
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }] 
            }
          ]}
        >
          <Text style={styles.brandText}>VolMax Studio</Text>
          <View style={styles.brandLine} />
          <Text style={styles.brandSubtext}>Professional Development</Text>
        </Animated.View>

        {/* EP-Ai Main Logo */}
        <Animated.View 
          style={[
            styles.logoSection,
            { 
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }] 
            }
          ]}
        >
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>EP</Text>
            <Text style={styles.logoSubtext}>Ai</Text>
          </View>
          
          <Text style={styles.tagline}>ElektroPlan AI</Text>
          
          <Text style={styles.subtitle}>
            Revolutionary AR planning tool for{'\n'}
            electrical professionals
          </Text>

          {/* Feature Highlights */}
          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📱</Text>
              <Text style={styles.featureText}>AR Element Placement</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🧮</Text>
              <Text style={styles.featureText}>AI Cost Calculation</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📄</Text>
              <Text style={styles.featureText}>Professional Reports</Text>
            </View>
          </View>
        </Animated.View>

        {/* Action Buttons */}
        <Animated.View 
          style={[
            styles.buttonSection,
            { 
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }] 
            }
          ]}
        >
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#00ff87', '#00cc6a']}
              style={styles.buttonGradient}
            >
              <Text style={styles.primaryButtonText}>Get Started</Text>
              <Text style={styles.primaryButtonSubtext}>Start AR Planning</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleViewProjects}
            activeOpacity={0.7}
          >
            <Text style={styles.secondaryButtonText}>View Projects</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Version Info */}
        <Animated.View 
          style={[
            styles.footer,
            { opacity: fadeAnim }
          ]}
        >
          <Text style={styles.versionText}>Version 0.1.0 Beta</Text>
          <Text style={styles.footerText}>Powered by VolMax Studio</Text>
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  brandSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  brandText: {
    fontSize: 14,
    color: '#cccccc',
    letterSpacing: 3,
    fontWeight: '300',
    textTransform: 'uppercase',
  },
  brandLine: {
    width: 80,
    height: 1,
    backgroundColor: '#00ff87',
    marginVertical: 8,
  },
  brandSubtext: {
    fontSize: 12,
    color: '#888888',
    letterSpacing: 1,
  },
  logoSection: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: -50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 84,
    fontWeight: '900',
    color: '#00ff87',
    letterSpacing: -3,
    textShadowColor: 'rgba(0, 255, 135, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  logoSubtext: {
    fontSize: 38,
    fontWeight: '300',
    color: '#ffffff',
    marginLeft: 8,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: '400',
    marginBottom: 15,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  featuresContainer: {
    width: '100%',
    maxWidth: 300,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#00ff87',
  },
  featureIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  featureText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
  },
  buttonSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  primaryButton: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#00ff87',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonGradient: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#1a1a1a',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  primaryButtonSubtext: {
    color: '#1a1a1a',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
    opacity: 0.8,
  },
  secondaryButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#00ff87',
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  secondaryButtonText: {
    color: '#00ff87',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  versionText: {
    color: '#00ff87',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 5,
  },
  footerText: {
    color: '#888888',
    fontSize: 11,
    fontStyle: 'italic',
  },
});
