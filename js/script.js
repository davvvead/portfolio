const img = document.getElementById('art-img');
const body = document.getElementById('main');
const nav = document.querySelector('.nav');
const navbarText = document.querySelectorAll('.nav a');
let text = document.querySelectorAll('.text');

// console.log(nav);

// img.addEventListener('mouseover', color);
img.onmouseenter = color;
img.onmouseleave = bw;

// Function to change colour of image
function color(e) {
    console.log('true');
    img.innerHTML  = `<img src="assets/img/project_color.png" alt="" class = "w-100">`;
    body.style.backgroundColor = '#fff';
    nav.style.background = '#000';
    text.forEach( function(each){
        each.style.color = '#000';
    })
    navbarText.forEach( function(each){
        each.style.color = '#fff';
    })
}

// Function to change colour of image back to bw
function bw(e) {
    console.log('bw');
    img.innerHTML  = `<img src="assets/img/project.png" alt="" class="w-100">`;
    nav.style.background = '#333';
    text.forEach( function(each){
        each.style.color = '#333';
    })
}