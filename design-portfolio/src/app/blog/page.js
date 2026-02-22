
import Link from 'next/link';
import { getBlogs } from '@/lib/blog';

export default function Blog() {
    const blogPosts = getBlogs();

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-24 font-sans">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">writing.</h1>
                    <p className="text-zinc-400 text-lg">thoughts on design, code, and everything in between.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.id} className="group block">
                            <article className="h-full border border-zinc-900 bg-zinc-950/50 p-6 rounded-xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
                                <div className="flex justify-between items-center text-xs font-medium text-zinc-500 mb-4">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-semibold mb-2 text-zinc-100 group-hover:text-white transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {post.description}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
