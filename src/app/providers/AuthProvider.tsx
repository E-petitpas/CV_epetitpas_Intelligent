import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { supabase } from "@/shared/api/supabaseClient";
import type { User } from "@supabase/supabase-js";

type AuthCtx = { user: User | null; loading: boolean };
const Ctx = createContext<AuthCtx>({ user: null, loading: true });

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    supabase.auth.getSession().then(({ data }) => {
      if (!ignore) {
        setUser(data.session?.user ?? null);
        setLoading(false);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => { ignore = true; sub.subscription.unsubscribe(); };
  }, []);

  return <Ctx.Provider value={{ user, loading }}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
