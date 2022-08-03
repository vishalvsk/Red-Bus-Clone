const getData = async () => {
  try {
    let url = "http://localhost:3000/redbus";
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)
    display_buses(data);
    return data
  } catch (err) {
    console.log(err);
  }
};
getData();

const display_buses = (data) => {
 let no_of_buses = document.getElementById("no_of_buses");
 let bus_details_section = document.getElementById("bus_details_section");
 bus_details_section.innerHTML = "";
 no_of_buses.innerHTML=`${data.length} Buses`;

  data.forEach((bus) => {
  
    let bus_card=document.createElement("div");
    bus_card.setAttribute("class","bus_card");

    bus_card.innerHTML = `
    <div class="bus_info">
        <table>
            <tr>
                <td class="bold"><img class="operator_logo" src="https://www.redbus.in/images/reviews/primo_logo.svg" alt=""></td>
            </tr>
            <tr>
                <td class="bold">${bus.company}</td>
                <td class="bold">${bus.time_in}</td>
                <td class="font">07:30</td>
                <td>${bus.time_out}</td>
                <td>
                    <p class="rating"><i class="fa-regular fa-star"></i>${bus.rating}</p>
                </td>
            </tr>
            <tr>
                <td>${bus.bus_name}</td>
                <td>Kashimiri Gate</td>  
                <td><i class="fa-solid fa-arrow-right"></i></td>
                <td>Lucknow</td>
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
        <button class="see_setails_btn">See Seats</button>
    </div>
    `;
    bus_details_section.append(bus_card);

// Tried with another approach also ===============================================================

 /*
let bus_card = document.createElement("div");
bus_card.setAttribute("class","bus_card");
let bus_info = document.createElement("div");
bus_info.setAttribute("class","bus_info");
let table = document.createElement("table");
let tr1 = document.createElement("tr");
let td = document.createElement("td");
td.setAttribute("class","bold");
let operator_logo=document.createElement("img");
operator_logo.setAttribute("class","operator_logo");
operator_logo.src="https://www.redbus.in/images/reviews/primo_logo.svg";
td.append(operator_logo);
tr1.append(td);

let tr2 = document.createElement("tr");
let tr2_td1 = document.createElement("td");
let tr2_td2 = document.createElement("td");
let tr2_td3 = document.createElement("td");
let tr2_td4 = document.createElement("td");
let tr2_td5 = document.createElement("td");
tr2_td1.setAttribute("class","bold");
tr2_td2.setAttribute("class","bold");
tr2_td3.setAttribute("class","font");
let rating= document.createElement("p");
rating.setAttribute("class","rating");
rating.innerHTML=`<i class="fa-regular fa-star"></i>${bus.rating}`;
tr2_td1.textContent=bus.company;
tr2_td2.textContent = bus.time_in;
tr2_td3.textContent="07:30";
tr2_td4.textContent=bus.time_out;
tr2_td5.append(rating);
tr2.append(tr2_td1,tr2_td2,tr2_td3,tr2_td4,tr2_td5);

let tr3 = document.createElement("tr");
let tr3_td1 = document.createElement("td");
let tr3_td2 = document.createElement("td");
let tr3_td3 = document.createElement("td");
let tr3_td4 = document.createElement("td");
let tr3_td5 = document.createElement("td");
tr3_td5.setAttribute("class","member");
 tr3_td1.textContent=bus.bus_name;
 tr3_td2.textContent="Kashimiri Gate";            //It will come from  user input
 tr3_td3.innerHTML=`<i class="fa-solid fa-arrow-right"></i>`;
 tr3_td4.textContent="Lucknow"                    //It will come from  user input
 tr3_td5.innerHTML=`<i class="fa-solid fa-people-group"></i>200`
tr3.append(tr3_td1,tr3_td2,tr3_td3,tr3_td4,tr3_td5);
table.append(tr1,tr2,tr3);

let price_nd_seat_div=document.createElement("div");
price_nd_seat_div.setAttribute("class","price_nd_seat_div");
let price=document.createElement("p");
price.innerHTML=`Starts from INR <span class="bold">${bus.price}</span>`;
let seats=document.createElement("p");
seats.textContent=`Seats : ${bus.seat_available}`;
price_nd_seat_div.append(price,seats);
bus_info.append(table,price_nd_seat_div);  

let extra_features_row=document.createElement("div");
extra_features_row.setAttribute("class","extra_features_row");
extra_features_row.innerHTML=`
<ul class="facility_icons">
<li title="Snacks" "><i class=" fa-solid fa-cookie"></i></li>
<li title="Water Bottle"><i class="fa-solid fa-bottle-water"></i></li>
<li title="Charging Point"><i class="fa-solid fa-plug"></i></li>
<li title="Toilet"><i class="fa-solid fa-restroom"></i></li>
</ul>
<p><i class="fa-solid fa-right-long"></i> Primo</p>
<p><i class="fa-solid fa-map-location-dot"></i>Live Tracking</p>
<button class="see_setails_btn">See Seats</button>
`;
bus_card.append(bus_info,extra_features_row);
bus_details_section.append(bus_card);
*/
  });

  document.querySelector(".see_setails_btn").addEventListener("click", () => {
    console.log("Button clicked");
  });
  
document.getElementById("rating").addEventListener("click",()=>{
sortData(data)
})

document.getElementById("price").addEventListener("click",()=>{
  sortPrice(data)
  })
  document.getElementById("departure").addEventListener("click",()=>{
    sortDepature(data)
    })

    document.getElementById("seat").addEventListener("click",()=>{
      sortSeat(data)
      })
};
const sortData = (data)=>{
  let sortType = data.sort((a,b)=>{
  return b.rating-a.rating
  })
  display_buses(sortType)
  }
const sortPrice = (data)=>{

let sortPrice = data.sort((a,b)=>{
return a.price-b.price
})
display_buses(sortPrice)
}
const sortDepature = (data)=>{
  let sortDep = data.sort((a,b)=>{
  return b.time_in-a.time_in
  })
  display_buses(sortDep)
  }

  const sortSeat = (data)=>{
    let sortSea = data.sort((a,b)=>{
    return b.seat_available-a.seat_available
    })
    display_buses(sortSea)
    }