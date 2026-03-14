import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Events from './pages/Events'
import Involvement from './pages/Involvement'
import Team from './pages/Team'
import BlogHome from './pages/BlogHome'
import PostDetail from './pages/PostDetail'
import PostForm from './pages/PostForm'
import PostDelete from './pages/PostDelete'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="involvement" element={<Involvement />} />
        <Route path="team" element={<Team />} />
        <Route path="blog" element={<BlogHome />} />
        <Route path="blog/post/new" element={<PostForm />} />
        <Route path="blog/post/:id" element={<PostDetail />} />
        <Route path="blog/post/:id/edit" element={<PostForm />} />
        <Route path="blog/post/:id/delete" element={<PostDelete />} />
      </Route>
    </Routes>
  )
}
