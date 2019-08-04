const footer = document.querySelector('.footer');
const windowLocation = window.location.pathname;
const copy = document.querySelector('.copywrite');
const team = document.querySelectorAll('.team');
const home = document.querySelectorAll(".home-item");

window.addEventListener('load', (event) => {
    console.log(team);
    console.log(windowLocation);
    if(windowLocation === "/about.html"){
        footer.style.backgroundImage = "url('./img/background-bottom.svg')";
        team.forEach(function(el){
            console.log(el);
            el.style.display = "none";
        });
        home.forEach(function (item) {
            console.log(item);
            item.style.display = "block";
        });
    }else{
        // location home page
        team.forEach(function (el) {
            console.log(el);
            el.style.display = "block";
        });
        home.forEach(function (item) {
            console.log(item);
            item.style.display = "none";
        });
    }
});


// let base = '/mi-brews';
// // if on localhost during development base = slash
// if (windowLocation.indexOf("localhost") > -1) {
//     base = '/';
// }

