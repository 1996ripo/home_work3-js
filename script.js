// ---------WatsAppWep-------------
const play = document.getElementById('play');
const video = document.getElementById('video');
const imgForVideo =document.getElementById('img-for-video');
const rememberMe =document.getElementById('rememberMe');
const singInInf = document.getElementById('sing-in-inf');


play.addEventListener('click',e=>{
    video.classList.toggle('d-block');
    video.classList.toggle('d-none');
    imgForVideo.classList.toggle('d-none');
    imgForVideo.classList.toggle('d-block');
    play.classList.toggle('d-none');
    play.classList.toggle('d-block');

})


rememberMe.addEventListener('change',e=>{
    singInInf.classList.toggle('d-block');
    singInInf.classList.toggle('d-none');
})