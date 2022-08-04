import { show_popups } from "./utilityFunctions/show_pop_up.js";
import getData from "./utilityFunctions/getBus_data.js";
import { upperDeck, lowerDeck } from "./utilityFunctions/getSeats.js";
import checking_point from "./utilityFunctions/checking_points_popUp.js"
import {patchSeat_upper,patchSeat_lower} from "./utilityFunctions/patch_seatDetail.js";

init_busData();
// show_popups();
 init_upperDeck();
 init_lowerDeck();

async function init_busData() {
  let data = await getData();
  display_buses(data);
}

async function init_upperDeck() {
  let data = await upperDeck();
   show_upperDeck(data);
}

async function init_lowerDeck() {
  let data = await lowerDeck();
   show_lowerDeck(data);
}


function display_buses(data) {
  let no_of_buses = document.getElementById("no_of_buses");
  let bus_details_section = document.getElementById("bus_details_section");
  bus_details_section.innerHTML = "";
  no_of_buses.innerHTML = `${data.length} Buses`;
  data.forEach((bus) => {
    let bus_card = document.createElement("div");
    bus_card.setAttribute("class", "bus_card");
    bus_card.innerHTML = `
    <div class="bus_info">
        <table>
            <tr id="tr1">
                <td class="bold"><img class="operator_logo" src="https://www.redbus.in/images/reviews/primo_logo.svg" alt=""></td>
            </tr>
            <tr id="tr2">
                <td class="bold">${bus.company}</td>
                <td id="in_time" class="bold">${bus.time_in}</td>
                <td id="duration" class="font">07:30</td>
                <td id="out_time">${bus.time_out}</td>
                <td>
                    <p class="rating"><i class="fa-regular fa-star"></i>${bus.rating}</p>
                </td>
            </tr>
            <tr>
                <td>${bus.bus_name}</td>
                <td id="pickup_point">Kashimiri Gate</td>  
                <td id="icon"><i class="fa-solid fa-arrow-right"></i></td>
                <td id="dept_point">Lucknow</td>
                <td class="members"><i class="fa-solid fa-people-group"></i>200</td>
            </tr>
        </table>
        <div class="price_nd_seat_div">
            <p>Starts from INR <span class="bold">${bus.price}</span></p>
            <p>${bus.seat_available} Seats available</p>

        </div>
    </div>
    <div class="extra_features_row">
        <ul class="facility_icons">
            <li title="Snacks"><i class=" fa-solid fa-cookie"></i></li>
            <li title="Water Bottle"><i class="fa-solid fa-bottle-water"></i></li>
            <li title="Charging Point"><i class="fa-solid fa-plug"></i></li>
            <li title="Toilet"><i class="fa-solid fa-restroom"></i></li>
        </ul>
        <p><i class="fa-solid fa-right-long"></i> Primo</p>
        <p><i class="fa-solid fa-map-location-dot"></i>Live Tracking</p>
        <div id="see_seat_btn_div">
        <button id="${bus.id}" class="view_seat_btn">view Seats</button>
        </div>
    </div>
    `;
  
    bus_details_section.append(bus_card);
    let view_seat_btn = document.getElementById(`${bus.id}`);
      view_seat_btn.addEventListener("click", () => {
      localStorage.setItem("selected_busID",bus.id);
      show_popups();
    });
    
  }); 
  

  document.getElementById("rating").addEventListener("click", () => {
    sortData(data);
  });
}

const sortData = (data) => {
  // console.log("inside sorting")
  let sorted = data.sort((x, y) => {
    return x.rating - y.rating;
  });
  display_buses(sorted);
};

function show_upperDeck(data) {
  let upper_deck_box = document.getElementById("upper_deck_box");
  data.forEach((seat) => {
    let seat_ele = document.createElement("p");
    seat_ele.setAttribute("class", "seat");
    seat_ele.setAttribute("title", `No: ${seat.id}`);
    seat_ele.innerText = seat.id;
    if (seat.Gender == "Female") {
      seat_ele.style.border = "2px solid red";
    }
    if (seat.booked) seat_ele.style.backgroundColor = "red";
    else seat_ele.style.backgroundColor = "white";
    upper_deck_box.append(seat_ele);
    seat_ele.onclick = () => {
        /*
        event.preventDefault();
      seat_ele.style.backgroundColor = "red";
      let obj = {
        booked: true,
      };
      patchSeat_upper(obj, seat.id);
      */
      checking_point();
      localStorage.setItem("selected_seat_id", seat.id);
      document.querySelector("#seats_contents_right").style.display = "none";
      document.querySelector("#seats_contents_right-2").style.display = "flex";
      document.querySelector("#confirm_booiking_box").style.display = "none";
    };
  });
}
function show_lowerDeck(data) {
  let lower_deck_box = document.getElementById("lower_deck_box");
  data.forEach((seat) => {
    let seat_ele = document.createElement("p");
    seat_ele.setAttribute("class", "seat");
    seat_ele.setAttribute("title", `No: ${seat.id}`);
    seat_ele.innerText = seat.id;
    if (seat.Gender == "Female") {
      seat_ele.style.border = "2px solid red";
    }
    if (seat.booked) seat_ele.style.backgroundColor = "red";
    else seat_ele.style.backgroundColor = "white";
    lower_deck_box.append(seat_ele);
    seat_ele.onclick = () => {
        /*
        event.preventDefault();
      seat_ele.style.backgroundColor = "red";
      let obj = {
        booked: true,
      }; 
      patchSeat_lower(obj, seat.id);
      */
      checking_point();
      localStorage.setItem("selected_seat_id", seat.id);
      document.querySelector("#seats_contents_right").style.display = "none";
      document.querySelector("#seats_contents_right-2").style.display = "flex";
      document.querySelector("#confirm_booiking_box").style.display = "none";
    };
  });
}

// checking_point fun
/*
function checking_point() {
  let boardPoint_div = document.getElementById("boardPoint_div");
  let dropPoint_div = document.getElementById("dropPoint_div");
  let boarding_points = document.querySelector(".boarding-points");
  let continue_btn = document.getElementById("continue_btn");
  let div1 = document.createElement("div");
  div1.innerHTML = `<input type="checkbox"><p class="bold" id="pick_time">23:00 </p><p class="bold" id="boarding-point"> Kashmiri Gate</p>`;
  let div2 = document.createElement("div");
  div2.innerHTML = `<input type="checkbox"><p class="bold" id="pick_time">06:00 </p><p class="bold" id="dropping-point"> Lucknow Gate</p>`;
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

    confirm_booking.innerHTML = `
    <p>Boarding Point - <span id="b_point">Kashmiri Gate</span></p><span id="b_time">23:00</span>
    <p>Dropping Point - <span id="b_point">Lucknow Gate</span></p><span id="d_time">06:00</span>
    <p>Seat No. : ${seatNo}</p>
    <p>Fare : <span id="fare">899</span></p>
    <button class="btn">Proceed to Book</button>
    `;
  });
}
*/