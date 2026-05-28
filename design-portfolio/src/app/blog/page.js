
import { getBlogs } from '@/lib/blog';
import BlogCards from '@/components/BlogCards';

export default function Blog() {
    const blogPosts = getBlogs();

    return (
        <div className="min-h-screen bg-[var(--surface-0)] text-[var(--foreground)] p-8 md:p-24 font-mono">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 mt-8">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-[var(--foreground)]">writing.</h1>
                    <p className="text-[var(--muted)] text-lg">thoughts on design, code, and everything in between.</p>
                </header>

                <BlogCards posts={blogPosts} />
            </div>
        </div>
    );
}
