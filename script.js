// https://github.com/mattboldt/typed.js/ form here first add the script link
var typed = new Typed(".multiple-text", {
    strings: ["Western and Classical Dance Teacher", "Youtuber", "Choreographer","Model"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
function aboutshow() {
    let homecontent = document.getElementsByClassName("content");
    let aboutcontent = document.getElementsByClassName("wholeabout");
    let aboutcontact = document.getElementsByClassName("contact_page");
        let aboutachievement = document.getElementsByClassName("achievement");
    let about_link = document.getElementById("about_link");
    let home_link = document.getElementById("home_link");
    let achievement_link = document.getElementById("achievement_link");
    let contact_link = document.getElementById("contact_link");
    homecontent[0].style.display = "none";
    aboutcontent[0].style.display = "block";
    aboutcontact[0].style.display = "none";
    aboutachievement[0].style.display = "none";
    about_link.style.color = "rgb(14, 255, 255)";
    home_link.style.color = "white";
    achievement_link.style.color = "white";
    contact_link.style.color = "white";
}
function homeshow() {
    let homecontent = document.getElementsByClassName("content");
    let aboutcontent = document.getElementsByClassName("wholeabout");
    let aboutcontact = document.getElementsByClassName("contact_page");
        let aboutachievement = document.getElementsByClassName("achievement");
    let about_link = document.getElementById("about_link");
    let home_link = document.getElementById("home_link");
    let achievement_link = document.getElementById("achievement_link");
    let contact_link = document.getElementById("contact_link");
    homecontent[0].style.display = "flex";
    aboutcontent[0].style.display = "none";
    aboutcontact[0].style.display = "none";
    aboutachievement[0].style.display = "none";
    about_link.style.color = "white";
    home_link.style.color = "rgb(14, 255, 255)";
    achievement_link.style.color = "white";
    contact_link.style.color = "white";
}
function contactshow() {
    let homecontent = document.getElementsByClassName("content");
    let aboutcontent = document.getElementsByClassName("wholeabout");
    let aboutcontact = document.getElementsByClassName("contact_page");
        let aboutachievement = document.getElementsByClassName("achievement");
    let about_link = document.getElementById("about_link");
    let home_link = document.getElementById("home_link");
    let achievement_link = document.getElementById("achievement_link");
    let contact_link = document.getElementById("contact_link");
    homecontent[0].style.display = "none";
    aboutcontent[0].style.display = "none";
    aboutachievement[0].style.display = "none";
    aboutcontact[0].style.display = "flex";
    about_link.style.color = "white";
    home_link.style.color = "white";
    achievement_link.style.color = "white";
    contact_link.style.color = "rgb(14, 255, 255)";
}
function achievementshow() {
    let homecontent = document.getElementsByClassName("content");
    let aboutcontent = document.getElementsByClassName("wholeabout");
    let aboutcontact = document.getElementsByClassName("contact_page");
    let aboutachievement = document.getElementsByClassName("achievement");
    let about_link = document.getElementById("about_link");
    let home_link = document.getElementById("home_link");
    let achievement_link = document.getElementById("achievement_link");
    let contact_link = document.getElementById("contact_link");
    homecontent[0].style.display = "none";
    aboutcontent[0].style.display = "none";
    aboutcontact[0].style.display = "none";
    aboutachievement[0].style.display = "flex";
    about_link.style.color = "white";
    home_link.style.color = "white";
    achievement_link.style.color = "rgb(14, 255, 255)";
    contact_link.style.color = "white";
}