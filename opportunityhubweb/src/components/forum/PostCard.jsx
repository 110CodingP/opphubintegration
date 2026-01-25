export default function PostCard({ post }) {
  return (
    <div className="card">
      <strong>{post.author}</strong>
      <h4>{post.title}</h4>
      <p>{post.content}</p>

      <div className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag small">
            {tag}
          </span>
        ))}
      </div>

      <small>{post.comments} comments</small>
    </div>
  );
}
