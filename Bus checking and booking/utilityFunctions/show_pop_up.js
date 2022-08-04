let main = document.querySelector("main");
let body = document.querySelector("body");
//  let see_seats_btn = document.querySelector(".see_seat_setails_btn");
//  console.log(see_seats_btn)
//  see_seats_btn.addEventListener("click",()=>{
//      show_popups(5);
//  })

const show_popups=(checked_id)=>{
    let bg_modal = document.querySelector("#bg-modal");
    bg_modal.style.display = "flex";
    body.style.overflow = "hidden";
    /*
    let checked_item=items.filter((el)=>{
       if(checked_id==el.id){
        return el.img;
       };
    });
    */
   /*
    let confirm_btn = document.getElementById("confirm_btn");
    confirm_btn.addEventListener("click", function () {
        let bg_modal = document.querySelector(".bg-modal");
        bg_modal.style.display = "none";
        body.style.overflow = "auto";
    }); */
}
// show_popups(5);

document.querySelector(".cross").addEventListener("click", function () {
    let bg_modal = document.querySelector("#bg-modal");
    bg_modal.style.display = "none";
    body.style.overflow = "auto";
});

export {show_popups};