import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OpportunityCard({ title, company, tag }) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.companyText}>{company}</Text>
        </View>
        {/* Placeholder for company logo if needed */}
        <View style={styles.logoBox} />
      </View>
      
      <View style={styles.tagBadge}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  companyText: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  logoBox: {
    width: 40,
    height: 40,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
  },
  tagBadge: {
    backgroundColor: '#f3f4f6',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '500',
  },

});
