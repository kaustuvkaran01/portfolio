
import { getBlogBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-24 font-sans">
            <article className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <div className="flex justify-between items-center text-zinc-500 text-sm mb-6">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-zinc-400">
                        {post.description}
                    </p>
                </header>

                <div
                    className="prose prose-invert prose-lg max-w-none text-zinc-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
}
