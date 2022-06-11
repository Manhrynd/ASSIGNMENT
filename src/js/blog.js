import { render } from "./common";
import { blogPost } from "./data";
function showBlog(blogs) {
  if (!Array.isArray(blogPost) || blogPost.length == 0) return [];
  let result = "";
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    result += `
        <div class="border-b py-8">
        <h3 class="mb-5">
          <a href="" class="text-[26px] font-bold"
            >${blog.name}</a
          >
        </h3>
        <div class="flex space-x-4 text-[#21243D] mb-5">
          <span>${blog.date}</span>
          <span>|</span>
          <span>${blog.tag}</span>
        </div>
        <p>
        ${blog.description}
        </p>
      </div>
        `;
  }
  return result;
}
render("blog-post", showBlog(blogPost));
