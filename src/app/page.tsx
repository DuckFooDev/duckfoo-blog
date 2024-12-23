import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight } from 'lucide-react'

import { posts } from './posts/posts'

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 space-y-8">
      <h1 className="text-5xl font-bold mb-12">Latest from our Team</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.values(posts).map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="group rounded-2xl border bg-purple-200/80 dark:bg-[#1A0826] p-8 transition-colors hover:bg-purple-300/80 dark:hover:bg-[#2A0D3D]"
          >
            <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-4 text-yellow-600 dark:text-yellow-300 text-sm mb-3 font-medium">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-purple-950 dark:text-white">{post.title}</h2>
            <p className="text-purple-900/90 dark:text-purple-100/90 mb-4">{post.excerpt}</p>
            <div className="flex items-center text-yellow-600 dark:text-yellow-300 font-medium">
              Read more
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

