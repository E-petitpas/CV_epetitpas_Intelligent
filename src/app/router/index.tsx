// src/app/router/index.tsx
import { createBrowserRouter } from "react-router-dom"
import RootLayout from "@/app/layout/RootLayout"
import GenerationPage from "@/features/generation/pages/GenerationPage"
import ProfilePage from "@/features/profile/pages/ProfilePage"
import LoginPage from "@/features/auth/pages/LoginPage"
// (optionnel) Protected si tu veux protéger /profile


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
     { index: true, element: <GenerationPage /> },
      { path: "login", element: <LoginPage /> },
      // Protège /profile si tu veux :
      // { path: "profile", element: <Protected><ProfilePage /></Protected> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
])
