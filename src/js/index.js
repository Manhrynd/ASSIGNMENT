import { render } from "./common";
import { productList } from "./data";
import { productPost } from "./data";
import { productProject } from "./data";

// selector đến element product
// khai báo hàm show product
function showProducts(products) {
  // kiểm tra
  if (!Array.isArray(productList) || productList.length == 0) return [];

  // xử lý
  let result = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    result += `
        <div class="col-span-2 order-2 md:order-1">
        <h2 class="text-[35px] font-bold md:text-[44px]">
        Hi, I am  ${product.name}<br/>
        Creative Technologist
        </h2>
        <h3 class="text-[30px] font-bold md:text-[35px]">
        ${product.address}, ${product.age}
        </h3>
        
        <p class="text-base my-5">
          ${product.description}
        </p>
        <a
          href=""
          class="inline-block bg-[#FF6464] text-white rounded py-3 px-10"
          >Download Resume</a
        >
      </div>
      <div class="col-span-1 order-1 md:order-2">
        <img
          src="${product.img}"
          alt=""
          class="rounded-full mx-auto md:ml-auto md:mr-0"
        />
      </div>
        `;
  }
  // return
  return result;
}

render("product", showProducts(productList));

function showPost(post) {
  // kiểm tra
  if (!Array.isArray(productPost) || productPost.length == 0) return [];

  // xử lý
  let result = "";
  const startRecent = `<div class="grid grid-cols-1 md:grid-cols-2 gap-8">`;
  for (let i = 0; i < post.length; i++) {
    const Post = post[i];
    result += `
          <div class="bg-white p-5">
            <h3 class="mb-5">
              <a href="/blog_detail.html?id=${Post.id}" class="text-[26px] font-bold"
                >${Post.title}</a>
              
            </h3>
            <div class="flex space-x-4 text-[#21243D] mb-5">
              <span>${Post.date}</span>
              <span>|</span>
              <span>Design, Pattern</span>
            </div>
            <p>
             ${Post.short_description}
            </p>
          </div>
          
        `;
  }
  const endRecent = `</div>`;
  // return
  return startRecent + result + endRecent;
}

render("post", showPost(productPost));

function showWork(works) {
  // kiểm tra
  if (!Array.isArray(productProject) || productProject.length == 0) return [];

  // xử lý
  let result = "";

  for (let i = 0; i < works.length; i++) {
    const Works = works[i];
    result += `
    <div class="project-items grid md:grid-cols-[241px,auto] border-b gap-8 py-8">
      <div>
      <img src="${Works.img}" alt="" class="w-full" />
    </div>
    <div>
      <h3>
        <a href="/work_detail.html?id=${Works.id}" class="text-[30px] font-bold">${Works.tittle}</a>
      </h3>
      <div class="flex items-center space-x-4 py-3">
        <!-- vì thẻ span ở dưới sẽ sử dụng padding nên nó sẽ có thuộc tính inline block -->
        <span
          class="inline-block bg-[#142850] rounded-full py-1 px-2 font-bold text-white"
          >${Works.date}</span
        >
        <span class="text-[#8695A4]">${Works.next_date}</span>
      </div>
      <p class="text-[#21243D]">
      ${Works.short_description}
      </p>
    </div>
    </div>
          `;
  }
  // return
  return result;
}

render("works", showWork(productProject));
