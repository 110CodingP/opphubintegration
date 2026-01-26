import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NavigationBar({ userName }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoGroup}>
        <View style={styles.logoIcon} />
        <View>
          <Text style={styles.title}>OpportunityHub</Text>
          <Text style={styles.subtitle}>Empowering Women in Business</Text>
        </View>
      </View>
      <Text style={styles.userText}>{userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoGroup: { flexDirection: 'row', alignItems: 'center' },
  logoIcon: { width: 32, height: 32, backgroundColor: '#d946ef', borderRadius: 16, marginRight: 10 },
  title: { fontWeight: '700', fontSize: 16 },
  subtitle: { fontSize: 10, color: '#6b7280' },
  userText: { fontWeight: '600', color: '#111' }
});