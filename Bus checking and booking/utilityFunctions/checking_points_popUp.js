import getData from "./getBus_data.js";
 import { upperDeck, lowerDeck } from "./getSeats.js";

async function checking_point() {
    let selected_busID = localStorage.getItem("selected_busID");
    let selected_seat_id = localStorage.getItem("selected_seat_id");
     selected_seat_id=+selected_seat_id;


     let buses_data = await getData();
     let seats_data =await upperDeck();

     if(selected_seat_id <= 48)  seats_data = await upperDeck();
     else seats_data = await lowerDeck();
    
    
     let selected_bus=buses_data.filter((el)=>{
         if(selected_busID==el.id) return el;
     })     
      let selected_seat=seats_data.filter((el)=>{
          if(selected_seat_id==el.id) return el;
      })     
    //  console.log("sel Bus: ",selected_bus[0].bus_name);
    //   console.log("sel Seat: ",selected_seat[0]);

    let boardPoint_div = document.getElementById("boardPoint_div");
    let dropPoint_div = document.getElementById("dropPoint_div");
    let boarding_points = document.querySelector(".boarding-points");
    let continue_btn = document.getElementById("continue_btn");
    let div1 = document.createElement("div");
    div1.innerHTML = `<input type="checkbox"><p class="bold" id="pick_time">${selected_bus[0].time_in} </p><p class="bold" id="boarding-point"> Kashmiri Gate</p>`;
    let div2 = document.createElement("div");
    div2.innerHTML = `<input type="checkbox"><p class="bold" id="drop_time">${selected_bus[0].time_out}</p><p class="bold" id="dropping-point"> Lucknow Gate</p>`;
    boarding_points.innerHTML = "";
    boarding_points.append(div1);
    boardPoint_div.addEventListener("click", () => {
      boarding_points.innerHTML = "";
      boarding_points.append(div1);
    });
    dropPoint_div.addEventListener("click", () => {
      boarding_points.innerHTML = "";
      boarding_points.append(div2);
    });
    continue_btn.addEventListener("click", () => {
      document.querySelector("#seats_contents_right-2").style.display = "none";
      let confirm_booking = document.querySelector("#confirm_booiking_box");
      confirm_booking.style.display = "flex";
      let seatNo = localStorage.getItem("selected_seat_id");
      let sum_price = (selected_seat[0].extra_price)+(selected_bus[0].price);
      confirm_booking.innerHTML = `
      <p>Boarding Point - <span id="b_point">Kashmiri Gate</span></p><span id="b_time">${selected_bus[0].time_in}</span>
      <p>Dropping Point - <span id="b_point">Lucknow Gate</span></p><span id="d_time">${selected_bus[0].time_out}</span>
      <p>Seat No. : ${seatNo}</p>
      <p>Fare : <span id="fare" class=""bold>${selected_bus[0].price}+Extra Seat Price (${selected_seat[0].extra_price}) = ${sum_price}</span></p>
      <button class="btn">Proceed to Book</button>
      `;
    });
  }

  export default checking_point;