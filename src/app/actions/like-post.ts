'use server'

// In a real app, this would be connected to a database
let likes = new Map<string, number>()

export async function likePost(postId: string) {
  const currentLikes = likes.get(postId) || 0
  likes.set(postId, currentLikes + 1)
  return { likes: currentLikes + 1 }
}

