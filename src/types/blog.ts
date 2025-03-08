export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  likes: number
  date: string
  readingTime: string,
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    author?: string;
    publishedDate?: string;
    modifiedDate?: string;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    openGraph?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    twitter?: any
  };
}

