import { useState } from "react";
import CreatePost from "./CreatePost";
import PostList from "./PostList";

export default function ForumPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const posts = [
    {
      id: 1,
      author: "Ambitious Leader",
      title: "Just got invited to an interview at Tech Innovators!",
      content:
        "I'm so excited! Any advice for preparing for a technical interview?",
      tags: ["Interview Tips", "Tech Industry", "Career Advice"],
      comments: 2,
    },
    {
      id: 2,
      author: "Fearless Entrepreneur",
      title: "Tips for negotiating remote work compensation?",
      content:
        "What factors should I consider to make sure I'm getting fair pay?",
      tags: ["Salary Negotiation", "Remote Work"],
      comments: 1,
    },
    {
      id: 3,
      author: "Graceful Achiever",
      title: "Women in Business Networking Event – Seattle",
      content:
        "Anyone attending the Women in Tech event next week in Seattle?",
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
    <div className="forum-container">
      {/* HEADER */}
      <h1 className="forum-title">Community Forum</h1>
      <p className="forum-subtitle">
        Share experiences, ask questions, and connect with other professionals
      </p>

      {/* TOP CARDS */}
      <div className="top-cards">
        <div className="card">
          <p className="card-title">Active Users</p>
          <p className="active-users">🟢 16</p>
        </div>

        <div className="card">
          <p className="card-title">Your Identity</p>
          <p className="identity-name">Anonymous</p>
          <small>You’re posting anonymously</small>
        </div>
      </div>

      {/* FILTERS */}
      <div className="card">
        <p className="card-title">Filter by Tags</p>
        <div className="tags">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`tag ${selectedTag === tag ? "active" : ""}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* CREATE POST */}
      <CreatePost />

      {/* POSTS */}
      <PostList posts={filteredPosts} />
    </div>
  );
}
