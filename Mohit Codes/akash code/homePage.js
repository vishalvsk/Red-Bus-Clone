import navbar from "./navbarhome.js";
// import moduleName from '../../Bus checking and booking/Bus ticket booking Module/availabilty_nd_booking.html'
let header = document.getElementById("header");
header.innerHTML = navbar();

// function searchBtn(){
//     console.log("searchBtn()")
// }

document.querySelector("form").addEventListener("submit",()=>{
    event.preventDefault();
        let from = document.querySelector("#input-label-from").value;
        let to = document.querySelector("#input-label-to").value;
        let Date = document.querySelector("#input-label-onward-date").value;
 
         let obj ={
           pickPoint : from,
           dropPoint: to,
           date : Date
         }

         localStorage.setItem("user_inputs",JSON.stringify(obj));
    //  console.log(JSON.parse(localStorage.getItem("user_inputs")));
      window.open("../../Bus checking and booking/Bus ticket booking Module/availabilty_nd_booking.html", "_self");
})

// manging 
document.getElementById("dropup-menu-booking").addEventListener("dblclick",function(){
    document.querySelector(".dropdown-menu-booking").style.display = "flex";
    document.querySelector(".dropdown-menu-booking").style.backgroundColor = 'white';
});
document.querySelector("#dropup-menu-booking").addEventListener("click",function(){
    document.querySelector(".dropdown-menu-booking").style.display = "none";
});

// ------------double click on profile:- signUp open----------------------
document.getElementById("dropup-menu").addEventListener("dblclick",function(){
    document.querySelector(".dropdown-menu").style.display = "flex";
    document.querySelector(".dropdown-menu").style.backgroundColor = 'white';
});
// // ------ click on profile:- signUp close-------
document.getElementById("dropup-menu").addEventListener("click",function(){
    document.querySelector(".dropdown-menu").style.display = "none";
});
