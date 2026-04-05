const profileForm = document.getElementById("profileForm");

if (profileForm) {
  profileForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const role = document.getElementById("roleInput").value;

    if(name) document.getElementById("userName").textContent = name;
    if(email) document.getElementById("userEmail").textContent = email;
    if(role) document.getElementById("userRole").textContent = role;

    alert("Profile updated successfully!");
  });
}