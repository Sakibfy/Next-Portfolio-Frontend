"use client";

import { create } from "@/actions/create";
import Form from "next/form";
import { useState } from "react";

export default function CreateBlogForm() {
  const [published, setPublished] = useState("true");

  return (
    <Form
      action={create}
      className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-900 shadow-xl rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
         Create a New Blog Post
      </h2>

      {/* Slug */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          htmlFor="slug"
        >
          Slug
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          placeholder="my-first-blog"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>

      {/* Title */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="My First Blog Post"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>

      {/* Description */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          placeholder="This is an introduction to my portfolio blog..."
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>

      {/* Content */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          rows={5}
          placeholder="Write your blog content here..."
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>

      {/* Thumbnail */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          htmlFor="thumbnail"
        >
          Thumbnail URL
        </label>
        <input
          type="url"
          id="thumbnail"
          name="thumbnail"
          placeholder="https://example.com/image.jpg"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-yellow-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>
      {/* Published */}
      <div>
        <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Published
        </p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="published"
              value="true"
              checked={published === "true"}
              onChange={(e) => setPublished(e.target.value)}
              className="text-yellow-500 focus:ring-yellow-400"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="published"
              value="false"
              checked={published === "false"}
              onChange={(e) => setPublished(e.target.value)}
              className="text-yellow-500 focus:ring-yellow-400"
            />
            No
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-md hover:bg-yellow-600 transition"
      >
        🚀 Submit Blog
      </button>
    </Form>
  );
}
