import { render } from "./common";
import { productProject } from "./data";

function showFeature(features){
    if(!Array.isArray(productProject)|| productProject.length == 0) return[];
      let result = "";
      for(let i = 0; i< features.length; i++){
        const feature = features[i];
        result += `
        <div class="project-items grid md:grid-cols-[241px,auto] gap-8 border-b py-8">
        <div>
              <img src="${feature.img}" alt="" class="w-full" />
            </div>
            <div>
              <h3>
                <a href="/work_detail.html?id=${feature.id}" class="text-[30px] font-bold">${feature.tittle}</a>
              </h3>
              <div class="flex items-center space-x-4 py-3">
                <!-- vì thẻ span ở dưới sẽ sử dụng padding nên nó sẽ có thuộc tính inline block -->
                <span
                  class="inline-block bg-[#142850] rounded-full py-1 px-2 font-bold text-white"
                  >${feature.date}</span
                >
                <span class="text-[#8695A4]">${feature.next_date}</span>
              </div>
              <p class="text-[#21243D]">
               ${feature.short_description}
              </p>
            </div>
            </div>
        `
  }
    return result;
  }
  render("feature-works", showFeature(productProject))