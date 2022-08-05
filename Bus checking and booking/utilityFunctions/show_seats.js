import getData from "./getBus_data.js";
import { upperDeck, lowerDeck } from "./getSeats.js";
import checking_point from "./checking_points_popUp.js"

// init_upperDeck();
// init_lowerDeck();

async function init_upperDeck() {
    let data = await upperDeck();
    show_upperDeck(data);
  }
  
  async function init_lowerDeck() {
    let data = await lowerDeck();
    show_lowerDeck(data);
  }


  async function show_upperDeck(data) {
    let buses_data=await getData();
    let selected_busID = localStorage.getItem("selected_busID");
    let selected_bus=buses_data.filter((el)=>{
      if(selected_busID==el.id) return el;
  })   
//    console.log(selected_busID,selected_bus);
    let upper_deck_box = document.getElementById("upper_deck_box");
    upper_deck_box.innerHTML="";
    data.forEach((seat) => {
      let seat_ele = document.createElement("p");
      seat_ele.setAttribute("class", "seat");
      seat_ele.setAttribute("title", `No: ${seat.id}`);
      seat_ele.innerText = seat.id;
      if (seat.Gender == "Female") {
        seat_ele.style.border = "2px solid red";
      }
      
     if(selected_bus[0].booked_seats.includes(seat.id)){
      seat_ele.style.color="white";
      seat_ele.style.backgroundColor="red";
      seat_ele.setAttribute("title", `No: ${seat.id} Booked`);
     }else{
      seat_ele.style.backgroundColor="white";
     }
  
      upper_deck_box.append(seat_ele);
      seat_ele.onclick = () => {
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
    lower_deck_box.innerHTML="";
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
      
        checking_point();
        localStorage.setItem("selected_seat_id", seat.id);
        document.querySelector("#seats_contents_right").style.display = "none";
        document.querySelector("#seats_contents_right-2").style.display = "flex";
        document.querySelector("#confirm_booiking_box").style.display = "none";
      };
    });
  }

  export {init_upperDeck,init_lowerDeck};