window.addEventListener('load', () => {
    let btn = document.querySelectorAll('.btns button');
    let source = document.querySelector('source');
    let video = document.querySelector('video');
    let controlBtn = document.querySelectorAll('.controls')[0].children;
    let save = window.localStorage.btn;
    
    if (save == 0){
        source.src = 'video/Xbox-SeriesX.mp4';
        video.currentTime = window.localStorage.currentTime
        video.load()
    }
    if (save == 1){
        video.currentTime = window.localStorage.currentTime
        source.src = 'video/iPhone-12.mp4';
        video.load()
    }
    if (save == 2){
        video.currentTime = window.localStorage.currentTime
        source.src = 'video/Pixel-5.mp4';
        video.load()
    }
    
    btn[0].addEventListener('click', () => {
        source.src = 'video/Xbox-SeriesX.mp4';
        video.load()
    });
    btn[1].addEventListener('click', () => {
        source.src = 'video/iPhone-12.mp4';
        video.load()
    });
    btn[2].addEventListener('click', () => {
        source.src = 'video/Pixel-5.mp4';
        video.load()
    });

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            localStorage.btn = i;
        });
    }

    controlBtn[0].addEventListener('click', () => {
        video.pause();
    });
    controlBtn[1].addEventListener('click', () => {
        video.play();
    });
    controlBtn[2].addEventListener('click', () => {
        video.currentTime += 10;
    });
    controlBtn[3].addEventListener('click', () => {
        video.currentTime -= 10;
    });
    controlBtn[4].addEventListener('click', () => {
        video.volume += 0.1
    });
    controlBtn[5].addEventListener('click', () => {
        video.volume -= 0.1
    });

    window.onbeforeunload = () => {
        if(video.currentTime != 0){
            localStorage.source = source.src;
            localStorage.currentTime = video.currentTime;
        }
    }
});