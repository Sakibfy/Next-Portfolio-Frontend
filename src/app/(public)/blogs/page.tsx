import BlogCard from "@/components/modules/Blogs/BlogCard";

const AllBlogsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`)
  console.log(res);

  const  posts  = await res.json();

console.log(posts);  
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