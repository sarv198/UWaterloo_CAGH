import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const API_BASE = '/api'

export default function PostForm() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(isEdit)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isEdit) {
      fetch(`${API_BASE}/posts/${id}/`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title)
          setContent(data.content)
        })
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [id, isEdit])

  const getCsrfToken = () => {
    const cookie = document.cookie.split(';').find(c => c.trim().startsWith('csrftoken='))
    return cookie ? cookie.split('=')[1] : ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    const url = isEdit ? `${API_BASE}/posts/${id}/` : `${API_BASE}/posts/`
    const method = isEdit ? 'PUT' : 'POST'
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCsrfToken(),
      },
      credentials: 'same-origin',
      body: JSON.stringify({ title, content }),
    })
      .then((res) => {
        if (res.ok) navigate('/blog')
        else throw new Error('Failed to save')
      })
      .catch(console.error)
      .finally(() => setSubmitting(false))
  }

  if (loading) return <div className="text-center p-5">Loading...</div>

  return (
    <div className="content-section">
      <h1 className="mb-4">{isEdit ? 'Edit Post' : 'New Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            className="form-control"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Saving...' : 'Save Post'}
          </button>
          <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
