import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const API_BASE = '/api'

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/posts/${id}/`)
      .then((res) => res.ok ? res.json() : Promise.reject(res))
      .then((data) => setPost(data))
      .catch(() => setError('Post not found'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="text-center p-5">Loading...</div>
  if (error || !post) return <div className="alert alert-danger">{error || 'Post not found'}</div>

  return (
    <div className="content-section">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <hr />
      <small>{new Date(post.created_at).toLocaleString()}</small>
      <div className="btn-group mt-3">
        <Link to={`/blog/post/${post.id}/edit`} className="btn btn-outline-secondary">Edit</Link>
        <Link to={`/blog/post/${post.id}/delete`} className="btn btn-outline-danger">Delete</Link>
        <Link to="/blog" className="btn btn-outline-primary">Return Home</Link>
      </div>
    </div>
  )
}
