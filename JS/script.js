const open_sidebar = document.getElementById('open_sidebar');
const close_sidebar = document.getElementById('close_sidebar');

open_sidebar.addEventListener('click', ()=>{
    document.getElementById('main_sidebar').style.transform = 'scale(1)';
    document.getElementById('overlay').style.transform = 'scale(1)';
})
close_sidebar.addEventListener('click', ()=>{
    document.getElementById('main_sidebar').style.transform = 'scale(0 ,1)';
    document.getElementById('overlay').style.transform = 'scale(0, 1)';
})
var video = document.getElementById('video');
let played = false;
video.addEventListener('mouseenter',()=>{
    video.play();
    played = true;
    console.log(played);
    video.volume = 0
   
})
video.addEventListener('mouseleave',()=>{
     video.pause();
     played = false;
     console.log(played);
     video.currentTime = 0
 })