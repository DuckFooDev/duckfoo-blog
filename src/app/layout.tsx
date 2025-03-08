import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DuckFoo Blog – Web Development, AI & Machine Learning',
  description:
    'Stay updated with expert insights on Web Development, AI, NLP, Machine Learning, Vector Databases, and more. Discover the latest trends from the DuckFoo team.',
  keywords: [
    'DuckFoo Blog', 'Web Development', 'Firebase', 'Google', 'Machine Learning', 'AI',
    'Natural Language Processing', 'Vector Databases', 'Embeddings',
    'Full Stack Development', 'Tech Insights', 'Software Engineering',
    'Next.js', 'React', 'SEO', 'Data Science'
  ],
  author: 'DuckFoo',
  openGraph: {
    title: 'DuckFoo Blog – Tech Insights on AI, Web Development & NLP',
    description:
      'Learn about AI, Machine Learning, NLP, Vector Databases, Web Development, and the latest innovations from DuckFoo experts.',
    url: 'https://blog.duckfoo.dev',
    type: 'website',
    images: [
      {
        url: '/duck.svg',
        alt: 'DuckFoo Blog – AI, Web Dev & NLP Insights',
        width: 1200,
        height: 630
      }
    ],
    siteName: 'DuckFoo Blog'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DuckFoo Blog – AI, Web Dev & NLP Insights',
    description:
      'Expert insights on Web Development, AI, NLP, and Machine Learning from the DuckFoo team. Stay ahead in tech!',
    image: '/og-image.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
            <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`min-h-screen bg-purple-50 dark:bg-[#280e37] text-foreground ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

