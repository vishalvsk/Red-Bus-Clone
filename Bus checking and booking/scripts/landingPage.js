
function animate() {
    var reveals = document.querySelectorAll(".animate");
 
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
 
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  } 
   
   
   
 

 let from, to, Date;
 document.querySelector("#search").addEventListener("click",()=>{
  from = document.querySelector("#input-label-from").value;
  to = document.querySelector("#input-label-to").value;
  Date = document.querySelector("#input-label-onward-date").value;

  let obj ={
    pickPoint : from,
    dropPoint: to,
    date : Date
  }

  localStorage.setItem("user_inputs",JSON.stringify(obj));
// console.log(JSON.parse(localStorage.getItem("user_inputs")));
//  window.open("../availabilty_nd_booking.html", "_self");
 })

 /*
     function searchBtn() {
         from = document.querySelector("#input-label-from").value;
         to = document.querySelector("#input-label-to").value;
         Date = document.querySelector("#input-label-onward-date").value;
 
         let obj ={
           pickPoint : from,
           dropPoint: to,
           date : Date
         }

         localStorage.setItem("user_inputs",JSON.stringify(obj));
     console.log(JSON.parse(localStorage.getItem("user_inputs")));
     window.open("../availabilty_nd_booking.html", "_self");
     }
     */