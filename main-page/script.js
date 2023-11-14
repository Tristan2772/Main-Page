let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//-------------------------- hamburger menu ---------------------//

let hamMenu = document.querySelector("#ham-menu");
let navList = document.getElementById("nav-list");
function toggleNav(){
    navList.classList.remove("inactive-nav");
    navList.classList.add("active-nav");
    hamMenu.classList.remove("inactive-bars");
    hamMenu.classList.add("active-bars");
}
function toggleNavOff(){
    navList.classList.remove("active-nav");
    navList.classList.add("inactive-nav");
    hamMenu.classList.add("inactive-bars");
    hamMenu.classList.remove("active-bars");
}