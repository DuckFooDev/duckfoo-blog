import { posts } from './posts/posts'
import PostCard from './posts/components/post-card'

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 space-y-8">
      <h1 className="text-5xl font-bold mb-12">Latest from our Team</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.values(posts).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

