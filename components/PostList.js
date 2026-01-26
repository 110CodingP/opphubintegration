import React from 'react';
import { View } from 'react-native';
import PostCard from "./PostCard";

export default function PostList({ posts }) {
  return (
    <View>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </View>
  );
}