

// console.log(document.querySelectorAll(".show-modal"));
const show_modal = document.querySelectorAll(".show-modal");
const close_modal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");





// console.log(show_modal.length);

for(let i = 0; i < show_modal.length; i++){
    show_modal[i].addEventListener("click",function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        
    });
}

close_modal.addEventListener("click",function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})
