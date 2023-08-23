"use client";

import { UserDTO } from "@/blogapi";
import { proxy } from "@/blogapi/core/OpenAPI";
import { Provider, atom } from "jotai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import PostLoading from "./loading";

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const googleLogin = async () => {
    console.log(code);

    if (!code) return;
    try {
      const response = await fetch(
        `${proxy}/auth/google?code=${encodeURIComponent(code)}&client=front`,
        {
          method: "POST",
        }
      ).then((res) => res.json());
      const { accessToken } = response;
      console.log(response);

      if (!accessToken) return;
      window.localStorage.setItem("accessToken", accessToken);
      const path = window.localStorage.getItem("redirectUrl");
      router.replace(path ?? "/");
    } catch (error) {
      window.localStorage.removeItem("accessToken");
    }
  };
  useEffect(() => {
    // if (typeof window === "undefined") return;
    // const urlParams = new URLSearchParams(window.location.search);
    // const code = urlParams.get("code");
    // if (!code) return;
    // const path = window.localStorage.getItem("redirectUrl");
    // router.replace(path ?? "/");
    googleLogin();
  }, []);

  if (code) {
    return <PostLoading text="登录中..."></PostLoading>;
  }

  return <Provider>{children}</Provider>;
}
export const userAtom = atom<UserDTO | null>(null);
