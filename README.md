🚀 Next Portfolio Blog

A modern full-stack portfolio blog application built with Next.js 14, TypeScript, Prisma, Express.js, and NextAuth.js — featuring Google & Credentials Authentication, secure middleware protection, dynamic blog management, and RESTful backend API integration.

🧠 Overview

This project is a Portfolio Blog Platform where users can:

Sign in using Google or Email & Password

Create, edit, and delete blog posts

View published blogs on the frontend

Manage blogs securely with protected routes

 * Seamlessly integrate with a Node.js + Express backend via REST API

* Use Prisma ORM for database management


🛠️ Tech Stack

| Layer              | Technology                                                    | Description                                     |
| ------------------ | ------------------------------------------------------------- | ----------------------------------------------- |
| **Frontend**       | [Next.js 14 (App Router)](https://nextjs.org/docs)            | Framework for React-based SSR/SSG frontend      |
| **Backend**        | [Express.js](https://expressjs.com/)                          | RESTful backend API                             |
| **Database**       | [PostgreSQL](https://www.postgresql.org/)                     | Relational database                             |
| **ORM**            | [Prisma](https://www.prisma.io/)                              | Database ORM for schema modeling and migrations |
| **Authentication** | [NextAuth.js](https://next-auth.js.org/)                      | Handles Google and Credentials login            |
| **Type Checking**  | [TypeScript](https://www.typescriptlang.org/)                 | Strong typing for safety and scalability        |
| **Styling**        | [Tailwind CSS](https://tailwindcss.com/)                      | Utility-first modern CSS framework              |
| **Deployment**     | [Vercel](https://vercel.com/) / [Render](https://render.com/) | Deployment for frontend and backend             |

📁 Project Structure


├── prisma/
│   ├── schema.prisma        # Prisma schema definition
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/[...nextauth]/route.ts # NextAuth configuration
│   │   ├── dashboard/       # Protected dashboard pages
│   │   ├── login/           # Login page for credentials/google
│   │   └── blog/            # Blog listing and details
│   ├── components/          # UI components
│   ├── lib/                 # Prisma client setup
│   ├── actions/             # Server actions (CRUD)
│   └── middleware.ts        # Auth middleware (NextAuth)
├── .env                     # Environment variables
├── package.json
└── README.md

🧩 API Endpoints (Backend - Express)

| Method     | Endpoint                | Description            |
| ---------- | ----------------------- | ---------------------- |
| **POST**   | `/api/v1/auth/login`    | Login with credentials |
| **POST**   | `/api/v1/auth/register` | Register new user      |
| **GET**    | `/api/v1/posts`         | Get all posts          |
| **POST**   | `/api/v1/posts`         | Create a new post      |
| **GET**    | `/api/v1/posts/:id`     | Get a single post      |
| **PUT**    | `/api/v1/posts/:id`     | Update a post          |
| **DELETE** | `/api/v1/posts/:id`     | Delete a post          |



🧱 Prisma Schema Example

model User {
  id        Int      @id @default(autoincrement())
  name      String?
  email     String?  @unique
  image     String?
  posts     Post[]
}

model Post {
  id          Int      @id @default(autoincrement())
  slug        String   @unique
  title       String
  description String
  content     String
  thumbnail   String?
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  authorId    Int
  author      User     @relation(fields: [authorId], references: [id])
}

 Install Dependencies

npm install
# or
yarn install

 Run the Development Server
npm run dev
# or
yarn dev



🔍 Key Features

✅ Google OAuth & Email Login
✅ Prisma ORM with PostgreSQL
✅ TypeScript Safety
✅ Protected Dashboard using Middleware
✅ Dynamic Blog Creation via API
✅ Modern Tailwind UI
✅ Environment Secure Config
✅ NextAuth Callbacks for Session Management

🧩 Future Improvements

 Add blog search & category filters

 Integrate comments system

 Add admin dashboard with role-based access

 Deploy backend on Render & frontend on Vercel

 Implement dark/light theme