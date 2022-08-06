

let ticket_container= document.getElementById("ticket_container");

document.querySelector(".search_btn").addEventListener("click",()=>{

    let ticket_no = Document.querySelector(".ticket_no").value;
    get_ticket(ticket_no);
})

async function get_ticket(ticket_no){
  console.log("searching ticket");
}