import { useState } from "react";
import Button from "../ui/Button";


export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
  <div className="card create-post">
    <h3>Create a Post</h3>

    <input
      className="input"
      placeholder="Post title..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
      className="textarea"
      placeholder="What's on your mind?"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />

    <div className="post-btn-row">
      <Button onClick={() => console.log(title, content)}>
        Post
      </Button>
    </div>
  </div>
);

}
