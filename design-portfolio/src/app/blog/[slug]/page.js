
import { getBlogBySlug, getBlogs } from '@/lib/blog';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    const posts = getBlogs();
    return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[var(--surface-0)] text-[var(--foreground)] p-8 md:p-24 font-mono">
            <article className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <div className="flex justify-between items-center text-[var(--muted)] text-sm mb-6">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--foreground)] leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-[var(--muted)]">
                        {post.description}
                    </p>
                </header>

                <div
                    className="blog-content max-w-none text-[var(--foreground)]/76"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
}
