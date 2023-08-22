"use client";

import { UserDTO } from "@/blogapi";
import { proxy } from "@/blogapi/core/OpenAPI";
import { Provider, atom } from "jotai";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
export const userAtom = atom<UserDTO | null>(null);
