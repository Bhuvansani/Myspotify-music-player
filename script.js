
let songIndex=0;
let audioElement=new Audio("royalty.mp3");
let masterplay=document.getElementById("play");
let prev=document.getElementById("prev");
let next=document.getElementById("next");
let myprogressbar=document.getElementById("myprogressbar");
let musictitle=document.getElementById("music-title");
let cover=document.getElementById("cover");

let songs=[
    {songname:"on and on",filePath:"cartoon.mp3",image:"onandon.jpg",artist:"Stephen Bishop"},
    {songname:"funk",filePath:"funk.mp3",image:"funksong.jpg",artist:"Emin Nilsen and Kamran747"},
    {songname:"overdose",filePath:"overdose.mp3",image:"overdss.jpg",artist:"Ciara"},
    {songname:"royalty",filePath:"royalty.mp3",image:"royalty-1619082030-xBgqGZWLw9.jpg",artist:"Neoni"},
]

function playSong(index) {
    if (index >= 0 && index < songs.length) {
        audioElement.src = songs[index].filePath;
        audioElement.play();
        musictitle.textContent = `${songs[index].songname}`;
        document.getElementById("artist").textContent=`${songs[index].artist}`;
        cover.src=songs[index].image;
        songIndex = index;

        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");


    } else {
        console.log("Invalid song index");
    }
}

prev.addEventListener("click",()=>{
    let prevIndex = (songIndex - 1  + songs.length) % songs.length;
    playSong(prevIndex);

})

next.addEventListener("click",()=>{
    let nextIndex = (songIndex + 1) % songs.length;
    playSong(nextIndex);
})

masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle")
    }
})
audioElement.addEventListener("timeupdate",()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress
})

myprogressbar.addEventListener("change",()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})

