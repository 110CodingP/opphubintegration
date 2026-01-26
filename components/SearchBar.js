import React from 'react';
import { View, TextInput, Text, StyleSheet, Switch } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput 
          style={styles.input} 
          placeholder="Search opportunities or companies..." 
        />
        <View style={styles.dropdownPlaceholder}>
          <Text style={styles.dropdownText}>All Types</Text>
        </View>
      </View>
      
      <View style={styles.toggleRow}>
        <Switch value={false} trackColor={{ true: '#d946ef' }} />
        <Text style={styles.toggleLabel}>Show only opportunities reserved for women</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 24 },
  searchRow: { flexDirection: 'row', gap: 10, marginBottom: 15 },
  input: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 12, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#e5e7eb' 
  },
  dropdownPlaceholder: { 
    backgroundColor: '#fff', 
    padding: 12, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#e5e7eb',
    justifyContent: 'center'
  },
  dropdownText: { fontSize: 14 },
  toggleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  toggleLabel: { fontSize: 14, color: '#374151', fontWeight: '500' }
});