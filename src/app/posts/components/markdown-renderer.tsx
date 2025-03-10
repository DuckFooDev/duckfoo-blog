"use client"; // This makes it a Client Component
import MarkdownPreview from "@uiw/react-markdown-preview";

import "./markdown-styles.css";

export default function MarkdownRenderer({ content }: { content: string }) {
  return <MarkdownPreview source={content} className="markdown" />;
}