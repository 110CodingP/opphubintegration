import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = ['Opportunities', 'Calendar', 'Forum'];

  return (
    <View style={styles.sidebar}>
      <View>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.deptBox}>
        <Text style={styles.deptLabel}>Your Department:</Text>
        <View style={styles.deptBadge}>
          <Text style={styles.deptText}>EE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: { width: 240, backgroundColor: '#fff', borderRightWidth: 1, borderRightColor: '#e5e7eb', padding: 16, justifyContent: 'space-between', height: '100%' },
  tabButton: { padding: 12, borderRadius: 8, marginBottom: 8 },
  activeTab: { backgroundColor: '#111827' },
  tabText: { fontSize: 14, fontWeight: '600', color: '#374151' },
  activeTabText: { color: '#fff' },
  deptBox: { backgroundColor: '#f9f5ff', padding: 16, borderRadius: 12 },
  deptLabel: { fontSize: 12, fontWeight: 'bold', marginBottom: 8 },
  deptBadge: { backgroundColor: '#e5e7eb', alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  deptText: { fontSize: 12, fontWeight: 'bold' }
});