document.addEventListener("DOMContentLoaded", () => {

  function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }

  // NAVIGATION
  const navButtons = document.querySelectorAll(".nav button");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.textContent.toLowerCase();
      if(text.includes("home")) showSection("home");
      else if(text.includes("ebook")) showSection("ebooks");
      else if(text.includes("astronaut")) showSection("affiliate");
      else showSection("profile");
    });
  });

  // COPY REF
  const copyBtn = document.querySelector("#refCode + button");
  if(copyBtn){
    copyBtn.addEventListener("click", () => {
      const code = document.getElementById("refCode").innerText;
      navigator.clipboard.writeText(code);
      alert("Referral code copied!");
    });
  }

  // BUY BUTTONS
  document.querySelectorAll(".book button").forEach(btn => {
    btn.addEventListener("click", () => {
      const bookName = btn.parentElement.querySelector("h3").innerText;
      alert(`You selected '${bookName}'\n\nPayment is manual. Contact admin.`);
    });
  });

  // PROFILE SAVE
  const saveBtn = document.querySelector("#profile button");
  saveBtn.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    if(!name) return;

    const profile = {
      name: name,
      ref: "EM-" + Math.random().toString(36).substring(2,7).toUpperCase()
    };
    localStorage.setItem("emoon_profile", JSON.stringify(profile));
    document.getElementById("profileInfo").innerText = `Welcome, ${profile.name}`;
    document.getElementById("refCode").innerText = profile.ref;
  });

  // LOAD PROFILE ON START
  const data = localStorage.getItem("emoon_profile");
  if(data){
    const profile = JSON.parse(data);
    document.getElementById("profileInfo").innerText = `Welcome, ${profile.name}`;
    document.getElementById("refCode").innerText = profile.ref;
  }

  // DEFAULT SECTION
  showSection("home");
});
