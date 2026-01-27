import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import CreatePost from "./CreatePost";
import PostList from "./PostList";

export default function ForumPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const posts = [
    {
      id: 1,
      author: "Ambitious Leader",
      title: "Just got invited to an interview at Tech Innovators!",
      content: "I'm so excited! Any advice for preparing for a technical interview?",
      tags: ["Interview Tips", "Tech Industry", "Career Advice"],
      comments: 2,
    },
    {
      id: 2,
      author: "Fearless Entrepreneur",
      title: "Tips for negotiating remote work compensation?",
      content: "What factors should I consider to make sure I'm getting fair pay?",
      tags: ["Salary Negotiation", "Remote Work"],
      comments: 1,
    },
    {
      id: 3,
      author: "Graceful Achiever",
      title: "Women in Business Networking Event – Seattle",
      content: "Anyone attending the Women in Tech event next week in Seattle?",
      tags: ["Networking", "Events"],
      comments: 0,
    },
  ];

  const allTags = [
    "All",
    "Career Advice",
    "Interview Tips",
    "Networking",
    "Salary Negotiation",
    "Remote Work",
    "Tech Industry",
    "Events",
  ];

  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.forumTitle}>Community Forum</Text>
      <Text style={styles.forumSubtitle}>
        Share experiences, ask questions, and connect with other professionals
      </Text>


      <View style={styles.topCardsRow}>
        <View style={styles.statCard}>
          <Text style={styles.cardLabel}>Active Users</Text>
          <Text style={styles.activeUsersText}>🟢 16</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.cardLabel}>Your Identity</Text>
          <Text style={styles.identityName}>Anonymous</Text>
          <Text style={styles.smallText}>You’re posting anonymously</Text>
        </View>
      </View>


      <View style={styles.filterCard}>
        <Text style={styles.cardLabel}>Filter by Tags</Text>
        <View style={styles.tagWrapper}>
          {allTags.map((tag) => (
            <TouchableOpacity
              key={tag}
              style={[styles.tagButton, selectedTag === tag && styles.tagActive]}
              onPress={() => setSelectedTag(tag)}
            >
              <Text style={[styles.tagText, selectedTag === tag && styles.tagTextActive]}>
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

 
      <CreatePost />


      <PostList posts={filteredPosts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forumTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  forumSubtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  topCardsRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6b7280",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  activeUsersText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  identityName: {
    fontSize: 16,
    fontWeight: "600",
  },
  smallText: {
    fontSize: 11,
    color: "#9ca3af",
  },
  filterCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  tagWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tagButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    borderWidth: 1,
    borderColor: "#d1d5db",
  },
  tagActive: {
    backgroundColor: "#4f46e5",
    borderColor: "#4f46e5",
  },
  tagText: {
    fontSize: 12,
    color: "#374151",
  },
  tagTextActive: {
    color: "white",
    fontWeight: "600",
  },

});
