export const getBlogById = async (blogdetails : string) => {
 const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogdetails}`)

  return await  res.json();
}