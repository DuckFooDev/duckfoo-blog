'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

interface LikeButtonProps {
  postId: string
  initialLikes: number
}

export function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = async () => {
    if (!isLiked) {
      setIsLiked(true)
      alert("post liked")
      setLikes(p => p + 1)
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={isLiked}
      className="flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-400/50 text-purple-900 rounded-full font-medium transition-colors"
    >
      <Heart className={`w-5 h-5 ${isLiked ? 'fill-purple-900' : ''}`} />
      <span>{likes} likes</span>
    </button>
  )
}

