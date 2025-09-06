// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'
import QueryProvider from '@/app/providers/QueryProvider'
import { AuthProvider } from '@/app/providers/AuthProvider'

// ⚠️ Chemin CSS : adapte à ta structure réelle
import '@/shared/styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>
)
