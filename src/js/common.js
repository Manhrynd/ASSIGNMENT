// Hiển thị ra ngoài màn hình\
export function render(element, content) {
    const elementId = document.getElementById(element);
    //neu có giá trị thì hiển thị 
    if(!elementId) return;
    elementId.innerHTML =content;
}