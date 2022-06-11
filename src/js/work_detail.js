import { render } from "./common";
import { productProject } from "./data";

// lấy được id trên url
const id = new URLSearchParams(window.location.search).get("id");

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua
console.log("id", id);

const product = productProject.find((item) => item.id == id);
const result = `
<div>
<h3>
  <a href="" class="text-[30px] font-bold"
    >${product.tittle}</a
  >
</h3>
<div class="flex items-center space-x-4 py-3">
  <!-- vì thẻ span ở dưới sẽ sử dụng padding nên nó sẽ có thuộc tính inline block -->
  <span
    class="inline-block bg-[#142850] rounded-full py-1 px-2 font-bold text-white"
    >${product.date}</span
  >
  <span class="text-[#8695A4]">Dashboard</span>
 
</div>
<img src="${product.img}" alt="" class="w-full" />
<div>
  <p>${product.short_description}</p>
</div>
</div>
`;
render("work_details", result);