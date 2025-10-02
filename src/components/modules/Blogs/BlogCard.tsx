/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogCard({ post }: { post: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      className="group"
    >
      <Link href={`/blogs/${post.id}`} className="block">
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
        >
          {post.thumbnail ? (
            <motion.div
              className="relative h-56 w-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ) : (
            <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
              No Image
            </div>
          )}

          <div className="p-6 text-center">
            <motion.h3
              className="text-xl font-bold mb-2 text-yellow-600"
              whileHover={{ scale: 1.05, color: "#facc15" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {post.title}
            </motion.h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
              {post.content}
            </p>

            <motion.div
              className="mt-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-yellow-600 dark:text-blue-400 font-semibold text-sm cursor-pointer">
                Read More →
              </span>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
