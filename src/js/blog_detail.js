import { render } from "./common";
import { blogPost } from "./data"

const id = new URLSearchParams(window.location.search).get("id");
const blog = blogPost.find((item) => item.id == id);
const result = `
<div class="post border-b">
<div class="my-16">
    <a href="" class="text-5xl text-[#21243D] font-bold hover:underline">${blog.name}</a>
</div>
<div class="my-16">
    <span class="mr-2 text-2xl">${blog.date}</span>|
    <span class="ml-2 text-2xl">${blog.tag}</span>
</div>
<div class="my-16 text-2xl">
    <p>${blog.description}</p>
</div>
</div>
`;
render("blog-detail", result);