import { BlogPost } from '@/types/blog'
import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({post}: {post: BlogPost}) => {
  return (
    <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="group rounded-2xl border border-purple-900 bg-purple-200/80 dark:bg-[#1A0826] p-8 transition-colors hover:bg-purple-300/80 dark:hover:bg-[#2A0D3D]"
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
  )
}

export default PostCard