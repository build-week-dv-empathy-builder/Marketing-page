const footer = document.querySelector('.footer');
const windowLocation = window.location.pathname;
const copy = document.querySelector('.copywrite');

window.addEventListener('load', (event) => {
    console.log(footer);
    console.log(windowLocation);
    if(windowLocation === "/about.html"){
        footer.style.backgroundImage = "url('./img/background-bottom.svg')";
        copy.style.marginTop = 0;
    }
});


// let base = '/mi-brews';
// // if on localhost during development base = slash
// if (windowLocation.indexOf("localhost") > -1) {
//     base = '/';
// }

