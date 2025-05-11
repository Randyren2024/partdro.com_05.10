import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Admin, Editor, Playground } from 'react-bricks'

function AdminPage() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  )
}

export default AdminPage