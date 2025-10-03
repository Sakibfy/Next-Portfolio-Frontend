import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";






const BlogDetails = async({ params }: { params: Promise<{ blogdetails: string }> }) => {
  const { blogdetails } = await params;

console.log(blogdetails);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogdetails}`, {
    
  })

  const blog = await res.json()


  return (
    <div>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};
   

export default BlogDetails;