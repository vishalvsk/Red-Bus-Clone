import navbar from "./utilities/navbar.js";


let header = document.getElementById("header");
header.innerHTML = navbar();


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

// -------------Click On Sign:- Open 1st Popup--------------------------------
document.querySelector(".dropdown-menu").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".dropdown-menu").style.display = "none";
});
// ------Click on close and close 1st Popup-------------
document.getElementById("close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})


// ------- OTP varification Page--------
document.getElementById("ButtonSigup").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popuptwo").style.display = "flex";
});
document.getElementById("closetwo").addEventListener("click",function(){
    document.querySelector(".popuptwo").style.display = "none";
})




// dropdown-menu-booking

// let OTPButton = document.getElementById("ButtonSigup");


// OTPButton.addEventListener("click", async function(){
//     try {
//         let input = document.getElementById("inputName").value;

//         let res = await fetch(`` , {
//             method: "POST",
//             body:JSON.stringify(input),
//             headers:{
//                 "Content-Type" : "application/json",
//             },
//         });



//         console.log(input);
//     } catch (error) {
//         console.log(error)
//     }
// })