import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostCard({ post }) {
  return (
    <View style={styles.card}>
      <Text style={styles.author}>{post.author}</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.tagRow}>
        {post.tags.map((tag) => (
          <View key={tag} style={styles.tag}><Text style={styles.tagText}>{tag}</Text></View>
        ))}
      </View>
      <Text style={styles.footer}>{post.comments} comments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 16, borderRadius: 12, marginBottom: 16, elevation: 2 },
  author: { fontWeight: 'bold', color: '#4f46e5', marginBottom: 4 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  content: { color: '#374151', marginBottom: 12 },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 8 },
  tag: { backgroundColor: '#f3f4f6', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 15 },
  tagText: { fontSize: 11, color: '#6b7280' },
  footer: { fontSize: 12, color: '#9ca3af' }
});