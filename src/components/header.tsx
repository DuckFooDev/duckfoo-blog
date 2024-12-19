"use client"
import Link from "next/link";
import duckLogo from "@/assets/duck.svg"
import Image from "next/image";
import { useTheme } from "next-themes";

export function Header() {

  const { theme, setTheme } = useTheme()

  return (
    <header className="flex justify-between sticky p-4 top-0 z-50 w-full border-b bg-purple-100/95 dark:bg-[#1A0826]/95 backdrop-blur supports-[backdrop-filter]:bg-purple-100/60 dark:supports-[backdrop-filter]:bg-[#1A0826]/60">
      <div >
        <Link className="flex gap-4" href={"/"}><Image alt="logo" src={duckLogo} width={20} height={20} />DuckFoo Blog</Link>
      </div>

      <div className="flex gap-4 underline underline-offset-4">
        <Link href="https://www.duckfoo.dev">DuckFoo Website</Link>
      </div>
    </header>
  )
}

