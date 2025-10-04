import { NextResponse } from "next/server"

export const blogs = [
    {
        "id": 8,
        "slug": "my-first-blog 4 ",
        "title": "My First Blog Post 2",
        "description": "This is an introduction to my portfolio blog.",
        "content": "Hello! This is my first blog post written using Prisma + Express + Next.js",
        "published": true,
        "thumbnail": "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
        "createdAt": "2025-10-02T16:06:25.708Z",
        "updatedAt": "2025-10-02T16:06:25.708Z",
        "authorId": 3
    },
    {
        "id": 9,
        "slug": "my-first-blog 1 ",
        "title": "My First Blog Post 2",
        "description": "This is an introduction to my portfolio blog.",
        "content": "Hello! This is my first blog post written using Prisma + Express + Next.js",
        "published": true,
        "thumbnail": "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
        "createdAt": "2025-10-02T16:11:18.425Z",
        "updatedAt": "2025-10-02T16:11:18.425Z",
        "authorId": 3
    },
    {
        "id": 10,
        "slug": "my-first-blog 2 ",
        "title": "My First Blog Post 2",
        "description": "This is an introduction to my portfolio blog.",
        "content": "Hello! This is my first blog post written using Prisma + Express + Next.js",
        "published": true,
        "thumbnail": "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
        "createdAt": "2025-10-02T16:11:24.116Z",
        "updatedAt": "2025-10-02T16:11:24.116Z",
        "authorId": 3
    },
    {
        "id": 11,
        "slug": "my-first-blog 3 ",
        "title": "My First Blog Post 2",
        "description": "This is an introduction to my portfolio blog.",
        "content": "Hello! This is my first blog post written using Prisma + Express + Next.js",
        "published": true,
        "thumbnail": "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
        "createdAt": "2025-10-02T16:11:27.814Z",
        "updatedAt": "2025-10-02T16:11:27.814Z",
        "authorId": 3
    },
    {
        "id": 13,
        "slug": "qqq",
        "title": "qqq",
        "description": "qqq",
        "content": "qqq",
        "published": true,
        "thumbnail": "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
        "createdAt": "2025-10-04T06:04:42.214Z",
        "updatedAt": "2025-10-04T06:04:42.214Z",
        "authorId": 3
    }
]


export async function GET() {
  return Response.json(blogs)
}

export const POST = async (request: Request) => {
  const blog = await  request.json()
  const newBlog = {
    ...blog,
    id: blogs.length + 1,
  }
  blogs.push(newBlog);
   

  return new NextResponse(JSON.stringify(newBlog), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    }
  })
}