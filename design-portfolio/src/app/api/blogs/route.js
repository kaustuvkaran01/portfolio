
import { NextResponse } from 'next/server';
import { getBlogs, saveBlog } from '@/lib/blog';

export async function GET() {
    const blogs = getBlogs();
    return NextResponse.json(blogs);
}

export async function POST(request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.title || !body.description || !body.slug) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newBlog = saveBlog(body);

        if (newBlog) {
            return NextResponse.json(newBlog, { status: 201 });
        } else {
            return NextResponse.json({ error: 'Failed to save blog' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
}
