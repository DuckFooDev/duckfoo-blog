import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container py-16">
      <h1 className="text-5xl font-bold mb-8">Welcome to DuckFoo</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Building better digital products with our team of ProDucks.
      </p>
      <Link 
        href="/blog" 
        className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-400 px-8 text-sm font-medium text-purple-900 shadow transition-colors hover:bg-yellow-500"
      >
        Read our Blog
      </Link>
    </div>
  )
}

