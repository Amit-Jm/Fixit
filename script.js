// Scroll to repair section when Book Repair button clicked

document.getElementById("bookBtn").onclick = function(){

document.getElementById("repair").scrollIntoView();

};




// Form submit event

document.getElementById("repairForm").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("successMsg").innerText =
"Repair request sent successfully. We will contact you soon.";

});
