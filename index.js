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



// console.log(animated);
window.addEventListener('scroll', function (e) {
    // console.log(animated);
    const animated = e.target.querySelectorAll(".animated");
    if(animated.length !== 0){
        setTimeout(function(){
            animated.forEach(function (item) {
                item.classList.remove("animated");
            })
        }, 3000);
    }else if(animated.length === 0){
        wow.init();
    }
});

