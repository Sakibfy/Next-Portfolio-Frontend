/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs  | Portfolio"
}




const AllBlogsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store"
  })
  const  posts  = await res.json();


  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">

      <div className="m-6 grid lg:grid-cols-3 gap-3">
       {posts.map((post: any) => (
          <BlogCard key={post?.id} post={post}/>
        ))}
       </div>
    </div>
  );
};

export default AllBlogsPage;