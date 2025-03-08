import { Metadata } from "next";
import { posts } from "@/app/posts/posts";
import { notFound } from "next/navigation";

interface LayoutProps {
    children: React.ReactNode;
    params: { id: string };
}

export function generateStaticParams() {
    return Object.keys(posts).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const post = posts[params.id];

    if (!post) {
        notFound();
    }

    return {...post.metadata, title: post.metadata.title + ' | Duckfoo Blog'};
}


export default function BlogLayout({ children }: LayoutProps) {
    return <div>{children}</div>;
}
