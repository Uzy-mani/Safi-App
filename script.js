document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Account created successfully!");

  window.location.href = "dashboard.html";
});

const jobs = [
  "Plumber needed in Lagos",
  "Tailor needed for wedding dress",
  "Graphic designer for logo",
  "Electrician needed urgently"
];

const jobList = document.getElementById("jobList");

if (jobList) {
  jobs.forEach(job => {
    const li = document.createElement("li");
    li.textContent = job;
    jobList.appendChild(li);
  });
}

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