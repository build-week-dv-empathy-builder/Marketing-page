const footer = document.querySelector('.footer');
const windowLocation = window.location.pathname;
const copy = document.querySelector('.copywrite');
const team = document.querySelectorAll('.team');

window.addEventListener('load', (event) => {
    console.log(team);
    console.log(windowLocation);
    if(windowLocation === "/about.html"){
        footer.style.backgroundImage = "url('./img/background-bottom.svg')";
        team.forEach(function(el){
            console.log(el);
            el.style.display = "none";
        })
    }else{
        team.forEach(function (el) {
            console.log(el);
            el.style.display = "block";
        })
    }
});


// let base = '/mi-brews';
// // if on localhost during development base = slash
// if (windowLocation.indexOf("localhost") > -1) {
//     base = '/';
// }

