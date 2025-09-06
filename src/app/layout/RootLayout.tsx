import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-neutral-50 text-neutral-900">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 flex h-14 items-center justify-between">
          <div className="font-semibold">CV IA</div>
          <nav className="flex gap-3 text-sm">
            <NavLink to="/" className={({isActive}) =>
              `px-2 py-1 rounded ${isActive ? "bg-neutral-900 text-white" : "hover:bg-neutral-200"}`
            }>Génération</NavLink>
            <NavLink to="/profile" className={({isActive}) =>
              `px-2 py-1 rounded ${isActive ? "bg-neutral-900 text-white" : "hover:bg-neutral-200"}`
            }>Profil</NavLink>

 
<button
  className="ml-auto rounded px-3 py-1 text-sm bg-neutral-900 text-white"
  onClick={async () => { await supabase.auth.signOut() }}
>
  Déconnexion
</button>

          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
