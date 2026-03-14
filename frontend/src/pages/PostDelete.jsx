import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const API_BASE = '/api'

export default function PostDelete() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    fetch(`${API_BASE}/posts/${id}/`)
      .then((res) => res.ok ? res.json() : Promise.reject(res))
      .then((data) => setPost(data))
      .catch(() => setPost(null))
      .finally(() => setLoading(false))
  }, [id])

  const getCsrfToken = () => {
    const cookie = document.cookie.split(';').find(c => c.trim().startsWith('csrftoken='))
    return cookie ? cookie.split('=')[1] : ''
  }

  const handleDelete = () => {
    setDeleting(true)
    fetch(`${API_BASE}/posts/${id}/`, {
      method: 'DELETE',
      headers: { 'X-CSRFToken': getCsrfToken() },
      credentials: 'same-origin',
    })
      .then((res) => {
        if (res.ok) navigate('/blog')
        else throw new Error('Failed to delete')
      })
      .catch(console.error)
      .finally(() => setDeleting(false))
  }

  if (loading) return <div className="text-center p-5">Loading...</div>
  if (!post) return <div className="alert alert-danger">Post not found</div>

  return (
    <div className="content-section">
      <h1>Delete Post</h1>
      <div className="mb-3">
        <p>Are you sure you want to delete &quot;{post.title}&quot;?</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDelete}
          disabled={deleting}
        >
          {deleting ? 'Deleting...' : 'Yes, Delete'}
        </button>
        <Link to="/blog" className="btn btn-secondary ms-2">Cancel</Link>
      </div>
    </div>
  )
}
