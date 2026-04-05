document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Account created successfully!");

  window.location.href = "dashboard.html";
});