function openLogin(){
    document.getElementById("loginPopup").style.display="flex";
}

function closeLogin(){
    document.getElementById("loginPopup").style.display="none";
}
function revealCourses() {
  let reveals = document.querySelectorAll(".reveal1");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      
      reveals[i].classList.add("active");
    } else {
     
      reveals[i].classList.remove("active");
    }
  }
}
function toggleMenu() {
    const header = document.querySelector("header");
    const btn = document.querySelector(".menu-toggle");

    header.classList.toggle("active");

    // change icon
    if (header.classList.contains("active")) {
        btn.textContent = "✖";
    } else {
        btn.textContent = "☰";
    }
}

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector("header").classList.remove("active");
        document.querySelector(".menu-toggle").textContent = "☰";
    });
});
window.addEventListener("scroll", revealCourses);

// Call once on load
revealCourses();