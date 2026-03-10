// Form submission
document.getElementById("repairForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  try {
    await fetch("/api/repair", { method: "POST", body: formData });
    document.getElementById("successMsg").style.display = "block";
    this.reset();
  } catch {
    alert("Something went wrong. Please try again.");
  }
});

// Dynamic icons fetch backend contact info
async function loadContactButtons() {
  try {
    const res = await fetch("/api/contact-info"); // backend returns { whatsapp: "...", email: "..." }
    const data = await res.json();
    document.getElementById("whatsappBtn").onclick = () => { 
      window.open(`https://wa.me/${data.whatsapp}`, '_blank');
    };
    document.getElementById("emailBtn").onclick = () => { 
      window.location.href = `mailto:${data.email}`;
    };
  } catch {
    console.error("Cannot load contact info");
  }
}

loadContactButtons();