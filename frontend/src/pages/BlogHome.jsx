import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_BASE = '/api'

export default function BlogHome() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/posts/`)
      .then((res) => res.ok ? res.json() : Promise.reject(res))
      .then((data) => setPosts(data))
      .catch(() => setError('Failed to load posts'))
      .finally(() => setLoading(false))
  }, [])

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  if (loading) return <div className="text-center p-5">Loading...</div>
  if (error) return <div className="alert alert-danger">{error}</div>

  return (
    <>
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-4">The CAGH Community</h1>
        </div>
        <div className="col text-end">
          <Link to="/blog/post/new" className="btn btn-primary">Create New Post</Link>
        </div>
      </div>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 mb-4">
            <div className="content-section">
              <h2>
                <Link to={`/blog/post/${post.id}`} className="text-decoration-none">{post.title}</Link>
              </h2>
              <p>{post.content}</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">{formatDate(post.created_at)}</small>
                <div className="btn-group">
                  <Link to={`/blog/post/${post.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                  <Link to={`/blog/post/${post.id}/delete`} className="btn btn-sm btn-outline-danger">Delete</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
