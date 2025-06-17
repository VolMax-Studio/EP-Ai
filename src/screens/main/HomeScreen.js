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
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [recentProjects] = React.useState([
    { id: 1, name: 'Apartment Wiring', date: '2025-06-15', elements: 12 },
    { id: 2, name: 'Office Building', date: '2025-06-10', elements: 28 },
    { id: 3, name: 'Restaurant Kitchen', date: '2025-06-08', elements: 15 },
  ]);

  const quickActions = [
    {
      id: 'new-project',
      title: 'New Project',
      subtitle: 'Start AR planning',
      icon: '📱',
      color: '#00ff87',
      action: () => navigation.navigate('AR'),
    },
    {
      id: 'projects',
      title: 'My Projects',
      subtitle: 'View all projects',
      icon: '📁',
      color: '#4ecdc4',
      action: () => navigation.navigate('Projects'),
    },
    {
      id: 'calculator',
      title: 'Cost Calculator',
      subtitle: 'Quick estimation',
      icon: '🧮',
      color: '#ffe66d',
      action: () => alert('Calculator coming soon!'),
    },
    {
      id: 'reports',
      title: 'Reports',
      subtitle: 'Export & share',
      icon: '📄',
      color: '#ff8b94',
      action: () => alert('Reports coming soon!'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome back!</Text>
            <Text style={styles.headerTitle}>EP-Ai Dashboard</Text>
          </View>
          <View style={styles.headerStats}>
            <Text style={styles.statsText}>3 Projects</Text>
            <Text style={styles.statsSubtext}>This month</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                style={styles.actionCard}
                onPress={action.action}
                activeOpacity={0.8}
              >
                <View style={[styles.actionIcon, { backgroundColor: action.color + '20' }]}>
                  <Text style={styles.actionIconText}>{action.icon}</Text>
                </View>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Projects */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Projects</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {recentProjects.map((project) => (
            <TouchableOpacity
              key={project.id}
              style={styles.projectCard}
              activeOpacity={0.7}
            >
              <View style={styles.projectInfo}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectDate}>{project.date}</Text>
              </View>
              <View style={styles.projectStats}>
                <Text style={styles.projectElements}>{project.elements}</Text>
                <Text style={styles.projectElementsLabel}>elements</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Main CTA */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.mainCTA}
            onPress={() => navigation.navigate('AR')}
            activeOpacity={0.9}
          >
            <LinearGradient
              colors={['#00ff87', '#00cc6a']}
              style={styles.ctaGradient}
            >
              <View style={styles.ctaContent}>
                <Text style={styles.ctaIcon}>🚀</Text>
                <View style={styles.ctaText}>
                  <Text style={styles.ctaTitle}>Start AR Planning</Text>
                  <Text style={styles.ctaSubtitle}>Begin new electrical project</Text>
                </View>
                <Text style={styles.ctaArrow}>→</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Tips Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pro Tips</Text>
          <View style={styles.tipCard}>
            <Text style={styles.tipIcon}>💡</Text>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Use AR Crosshair</Text>
              <Text style={styles.tipText}>
                Point the crosshair at walls and surfaces for accurate element placement
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 20,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerStats: {
    alignItems: 'flex-end',
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
  },
  statsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ff87',
  },
  statsSubtext: {
    fontSize: 12,
    color: '#888888',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  seeAllText: {
    fontSize: 14,
    color: '#00ff87',
    fontWeight: '600',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: (width - 60) / 2,
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionIconText: {
    fontSize: 24,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
    textAlign: 'center',
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#888888',
    textAlign: 'center',
  },
  projectCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#00ff87',
  },
  projectInfo: {
    flex: 1,
  },
  projectName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  projectDate: {
    fontSize: 12,
    color: '#888888',
  },
  projectStats: {
    alignItems: 'center',
  },
  projectElements: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00ff87',
  },
  projectElementsLabel: {
    fontSize: 10,
    color: '#888888',
  },
  mainCTA: {
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#00ff87',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  ctaGradient: {
    borderRadius: 16,
    padding: 20,
  },
  ctaContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ctaIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  ctaText: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  ctaSubtitle: {
    fontSize: 14,
    color: '#1a1a1a',
    opacity: 0.8,
  },
  ctaArrow: {
    fontSize: 24,
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  tipIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 12,
    color: '#cccccc',
    lineHeight: 16,
  },
});
