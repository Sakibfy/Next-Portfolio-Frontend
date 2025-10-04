/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/PostServices";




export const generateStaticParams = async () => {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`)
  
  const posts = await res.json();

  return posts.slice(0, 2).map((post: any) => ({
    blogdetails: String(post.id)
  }))

}


export const generateMetadata = async ({params}: {params: Promise<{blogdetails: string}>}) => {

  const { blogdetails } = await params;

  const blog = await getBlogById(blogdetails)
  return {
    title: blog?.title,
    description: blog?.content,
  } 
}

const BlogDetails = async ({ params }: { params: Promise<{ blogdetails: string }> }) => {
  
  const { blogdetails } = await params;

  const blog = await getBlogById(blogdetails)


  return (
    <div>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};
   

export default BlogDetails;