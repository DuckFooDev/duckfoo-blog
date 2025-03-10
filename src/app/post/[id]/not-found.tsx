import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
      <p className="text-muted-foreground mb-8">Could not find the requested blog post.</p>
      <Link 
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-400 px-8 text-sm font-medium text-[var(--accent-color)] shadow transition-colors hover:bg-yellow-500"
      >
        Back to Blog
      </Link>
    </div>
  )
}

