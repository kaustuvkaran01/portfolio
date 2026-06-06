
import { getBlogBySlug, getBlogs } from "@/lib/blog";
import { notFound } from "next/navigation";

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
        <div className="min-h-screen bg-[var(--surface-0)] p-8 font-mono text-[var(--foreground)] md:p-24">
            <article className="mx-auto max-w-3xl">
                <header className="mb-12">
                    <div className="mb-6 flex items-center justify-between text-sm text-[var(--muted)]">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] md:text-5xl">
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
