
import fs from 'fs';
import path from 'path';

// Define the path to the JSON file
// process.cwd() returns the root directory of the Next.js project
const dataDirectory = path.join(process.cwd(), 'src/data');
const filePath = path.join(dataDirectory, 'blogs.json');

export function getBlogs() {
    // Read the JSON file
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const blogs = JSON.parse(fileContents);
        return blogs;
    } catch (error) {
        console.error("Error reading blog data:", error);
        return [];
    }
}

export function getBlogBySlug(slug) {
    const blogs = getBlogs();
    return blogs.find((blog) => blog.slug === slug);
}

export function saveBlog(newBlog) {
    const blogs = getBlogs();
    // Simple ID generation
    const id = blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1;
    const blogWithId = { id, ...newBlog };

    blogs.push(blogWithId);

    try {
        fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), 'utf8');
        return blogWithId;
    } catch (error) {
        console.error("Error writing blog data:", error);
        return null;
    }
}
