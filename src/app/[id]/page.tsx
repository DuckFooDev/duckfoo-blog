"use client"
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { notFound } from 'next/navigation'
import { posts } from "../posts/posts"
import MarkdownPreview from '@uiw/react-markdown-preview';



interface Props {
  params: {
    id: string
  }
}

export default function BlogPost({ params }: Props) {
  const post = posts[params.id]

  if (!post) {
    notFound()
  }

  console.log(post)

  return (
    <div className="container mx-auto py-16">
      <article className="max-w-4xl mx-auto">
        <div className="rounded-2xl border bg-purple-200/80 dark:bg-[#1A0826] p-8">
          <div className="flex items-center gap-4 text-yellow-600 dark:text-yellow-300 text-sm mb-6 font-medium">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-8 text-purple-950 dark:text-white">{post.title}</h1>
          <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
            <MarkdownPreview source={post.content} style={{background: "transparent"}}/>
        </div>
      </article>
    </div>
  )
}

