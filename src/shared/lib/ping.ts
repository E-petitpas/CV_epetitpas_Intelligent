// src/shared/lib/ping.ts
import { useQuery } from "@tanstack/react-query"

export async function pingPromise() {
  return new Promise<string>((res) => setTimeout(() => res("pong"), 500))
}

export function usePing() {
  return useQuery({ queryKey: ["ping"], queryFn: pingPromise })
}
