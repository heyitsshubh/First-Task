const wrapper = document.querySelector(".sliderWrapper")
const menuitems = document.querySelectorAll(".menuItem")

menuitems.forEach((item , position)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * position}vw)`
    });

});