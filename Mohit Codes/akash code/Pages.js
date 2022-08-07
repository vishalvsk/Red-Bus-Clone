
import navbar from "./navbarhome.js";

let header = document.getElementById("header");
header.innerHTML = navbar();

import footer from "./footer.js";

let foot = document.getElementById("footer");
// foot.innerHTML = footer();

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

async function gettrips(){
    try{
        let url = `http://localhost:3000/Tickets`;
        let res = await fetch(url);
        let trips = await res.json();
        // console.log(trips);
          show_all_trips(trips);
    }catch(err){
        console.log(err);
    }
}

gettrips()
function show_all_trips(trips){
    let tripsContainer = document.querySelector(".trips_det");
    tripsContainer.innerHTML="";
       if(!trips){
          let msg = document.createElement("p");
          msg.innerText = "No Trips found !"
          msg.setAttribute("class", "center");
          msg.style.color = "red";
          tripsContainer.innerHTML="";
          tripsContainer.append(msg);
       }else{
        trips.map((trip)=>{
       let card = document.createElement("div");
       card.setAttribute("id", "ticketCard");
       let bus = trip.booked_bus[0];
        card.innerHTML=` 
        <h3 class="center"><span>${trip.user_points_input.pickPoint}</span> to <span>${trip.user_points_input.dropPoint}</span></h3>
        <p class="center">Bus Name : <span>${bus.bus_name}</span></p>
        <div id="tickNo_price" class="row">
            <p class="bold">trip No : <span>${trip.ticketN0}</span></p>
            <p class="bold">Total Price : <span class="bold">Rs. <span class="bold">${trip.booked_price}</span></span></p>
        </div>
        <div id="times" class="row">
            <p>Boarding Time : <span>${bus.time_in}</span></p>
            <p>Dropping Time : <span>${bus.time_out}</span></p>
        </div>
        <div id="bus_det" class="row">
            <p>Bus Service : <span>${bus.company}</span></p>
            <p>Seat No : <span>${trip.booked_seatID}</span></p>
        </div>
        <div id="userDetail">
            <div class="row">
                <p>Traveller Name : <span>${trip.name}</span></p>
                <p>Phone No : <span>${trip.phone}</span></p>
            </div>
        </div>
        <p class="bold center">Booked at : <span>${trip.cur_Dt_time}</span></p>
        `;
        tripsContainer.append(card);
    });
}
}

