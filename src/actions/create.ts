"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";



export const create = async (data: FormData) => {
  
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
    authorId: 3,
    published: Boolean(blogInfo.published),
  };
  console.log(modifiedData);
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(modifiedData)

    }
  )

  const result = await res.json();
  
  if (result?.id) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/");
  }
  return result;
};