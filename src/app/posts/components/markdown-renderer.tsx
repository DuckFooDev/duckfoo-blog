"use client"; // This makes it a Client Component

import MarkdownPreview from "@uiw/react-markdown-preview";

export default function MarkdownRenderer({ content }: { content: string }) {
  return <MarkdownPreview source={content} style={{ background: "transparent" }} />;
}