"use client"
import Link from "next/link";
import duckLogo from "@/assets/duck.svg"
import duckText from "@/assets/duckfoo_text.svg"
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Header() {

  return (
    <header className="flex justify-between items-center sticky p-4 top-0 z-50 w-full border-b border-purple-950 bg-purple-100/95 dark:bg-[#1A0826]/95 backdrop-blur supports-[backdrop-filter]:bg-purple-100/60 dark:supports-[backdrop-filter]:bg-[#1A0826]/60">
      <div>
        <Link className="flex gap-4 items-center" href={"/"}>
        <Image alt="logo" src={duckLogo} width={20} height={20} />
        <Image alt="logo" src={duckText} width={140} height={20} />
        </Link>
      </div>

      <div className=" group flex justify-center items-center underline-offset-4 whitespace-nowrap bg-[var(--duckfoo-yellow)] font-semibold text-[var(--accent-color)] px-2 py-1 rounded-md">
        <Link href="https://www.duckfoo.dev">Go to Website</Link> <ArrowRight className="w-4 h-4 ml-2 mr-2 group-hover:translate-x-2 transition-transform" />

      </div>
    </header>
  )
}

