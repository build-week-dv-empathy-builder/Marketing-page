const footer = document.querySelector('.footer');
const windowLocation = window.location.pathname;
const copy = document.querySelector('.copywrite');
const team = document.querySelectorAll('.team');
const home = document.querySelectorAll(".home-item");

window.addEventListener('load', (event) => {
    if(windowLocation === "/about.html"){
        footer.style.backgroundImage = "url('./img/background-bottom.svg')";
        team.forEach(function(el){
            el.style.display = "none";
        });
        home.forEach(function (item) {
            item.style.display = "block";
        });
    }else{
        // location home page
        team.forEach(function (el) {
            el.style.display = "block";
        });
        home.forEach(function (item) {
            item.style.display = "none";
        });
    }
});





