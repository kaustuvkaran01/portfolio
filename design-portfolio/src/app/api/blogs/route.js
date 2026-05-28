
import { NextResponse } from 'next/server';
import { getBlogs } from '@/lib/blog';

export async function GET() {
    const blogs = getBlogs();
    return NextResponse.json(blogs);
}

export async function POST() {
    return NextResponse.json(
        { error: 'Write operations are disabled. Add a new file in content/blog/*.md.' },
        { status: 405 }
    );
}
