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
  
  
  




let from, to, onwardDate, returnDate;
    function searchBtn() {
        from = document.querySelector("#input-label-from").value;
        to = document.querySelector("#input-label-to").value;
        onwardDate = document.querySelector("#input-label-onward-date").value;
        returnDate = document.querySelector("#input-label-return-date").value;

        localStorage.setItem("from",from);
        localStorage.setItem("to",to);
        localStorage.setItem("onwardDate",onwardDate);
        localStorage.setItem("returnDate",returnDate);
        
    }
