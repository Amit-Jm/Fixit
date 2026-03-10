// Scroll to repair section

document.getElementById("bookBtn").onclick=function(){

document.getElementById("repair").scrollIntoView();

};


// Form Submit -> WhatsApp

document.getElementById("repairForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let address=document.getElementById("address").value;
let brand=document.getElementById("brand").value;
let problem=document.getElementById("problem").value;
let details=document.getElementById("details").value;

let message=`New Mobile Repair Booking

Name: ${name}
Phone: ${phone}
Address: ${address}

Brand: ${brand}
Problem: ${problem}

Details: ${details}`;

let url="https://wa.me/918603399409?text="+encodeURIComponent(message);

window.open(url,"_blank");

});
