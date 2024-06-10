import React from 'react'
import { createRoot } from 'react-dom/client'
import { GuestListContainer } from './components/GuestList'

const container = document.getElementById('root')

if (!container) throw new Error('Failed to find DOM element with ID: root')

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <GuestListContainer />
  </React.StrictMode>,
)
