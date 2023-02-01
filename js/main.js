$(document).ready(()=>{
    $('#menu').hide();
    $('#humburger').on('click',()=>{
        $("#humburger").toggleClass("active");
          $('#menu').show();
        // $("#menu").toggleClass("active");
    });
    $('[id=navLinks]').on('click',()=>{
        $("#humburger").toggleClass("active");
        //   $("#menu").toggleClass("active");
        $('#menu').hide()
    })

   


// const humburger = document.querySelector('#humburger');
// const menu = document.querySelector('#menu')
// humburger.addEventListener('click',()=>{
//     humburger.classList.toggle("active")
//     menu.classList.toggle("active")
// })
navLinks = document.querySelectorAll("#nav-links")
navLinks.forEach(link => link.addEventListener('click',()=>{
    humburger.classList.remove("active")
    menu.classList.remove("active")
}));

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'React',
    'Python', 'Java', 'git'
    , 'Node.js',
     'MySQL', 'jQuery',
];

var tagCloud = TagCloud('.skills', myTags,{
    // radius in px
    radius:120,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'normal',
  
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
  
    // interact with cursor move on mouse out
    keep: true
  
  });
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.skills').style.color = random_color;

});

