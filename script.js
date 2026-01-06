function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function generateRef() {
  return "EM-" + Math.random().toString(36).substring(2, 7).toUpperCase();
}

function saveProfile() {
  const name = document.getElementById("nameInput").value;
  if (!name) return;

  const profile = {
    name: name,
    ref: generateRef()
  };

  localStorage.setItem("emoon_profile", JSON.stringify(profile));
  loadProfile();
}

function loadProfile() {
  const data = localStorage.getItem("emoon_profile");
  if (!data) return;

  const profile = JSON.parse(data);
  document.getElementById("profileInfo").innerText =
    "Welcome, " + profile.name;
  document.getElementById("refCode").innerText = profile.ref;
}

function buyBook(book) {
  alert(
    "You selected '" + book +
    "'.\n\nPayment is manual.\nContact admin with screenshot."
  );
}

function copyRef() {
  const code = document.getElementById("refCode").innerText;
  navigator.clipboard.writeText(code);
  alert("Referral code copied!");
}

loadProfile();
showSection("home");
