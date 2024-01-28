console.log("hi kkundan");

let songIndex=0;
let audioElement =new Audio('song/4.mp3');
let masterPlay=document.getElementById('masterPlay');
let MyProgressBar=document.getElementById('MyProgressBar');
let gif=document.getElementById('gif');
let mastersongName=document.getElementById('mastersongName');
let songitems=Array.from(document.getElementsByClassName('songItem'));
 

let songs=[
    {SongName: "let me love you-justin beiber " ,filePath: "song/1.mp3" ,coverPath: "cover/wl1.jpeg"},
    {SongName: "get ready to fight -baghi" ,filePath: "song/2.mp3" ,coverPath: "cover/wl2.jpg"},
    {SongName: "dhoom again-2 song " ,filePath: "song/3.mp3" ,coverPath: "cover/wl4.jpeg"},
    {SongName: "bang bang  song" ,filePath: "song/4.mp3" ,coverPath: "cover/wl3.jpeg"},
    {SongName: "naseeb me jo " ,filePath: "song/5.mp3" ,coverPath: "cover/wl5.jpeg"},
    {SongName: "naseeb me jo " ,filePath: "song/6.mp3" ,coverPath: "cover/wl1.jpeg"},
    {SongName: "tip tip brsa pani ,dj remix " ,filePath: "song/7.mp3" ,coverPath: "cover/wl7.jpeg"},
    {SongName: "mn jogiya ,song " ,filePath: "song/8.mp3" ,coverPath: "cover/wl8.jpeg"},
    {SongName: "naseeb me jo " ,filePath: "song/9.mp3" ,coverPath: "cover/wl9.jpeg"},
]
songitems.forEach((element ,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].SongName;
   
});


// changing the song
const updatePlayPauseIcons = () => {
    Allplayers();
    const currentSongItemPlay = document.getElementById(`${songIndex}`);
    currentSongItemPlay.classList.remove('fa-play-circle');
    currentSongItemPlay.classList.add('fa-pause-circle');
};

// click on master button

masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mastersongName.innerText=songs[songIndex].SongName
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        updatePlayPauseIcons();
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        let reversethemasterplay = document.getElementById(`${songIndex}`);
        reversethemasterplay.classList.remove('fa-pause-circle');
        reversethemasterplay.classList.add('fa-play-circle');

        // updatepause();
    }
})
// time updation of progressbar
audioElement.addEventListener('timeupdate',()=>{
      progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    MyProgressBar.value=progress;
})
MyProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(MyProgressBar.value*audioElement.duration)/100;
})
// side button all players
const Allplayers=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}
//   click on side buttton
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        Allplayers();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songIndex+1}.mp3`;
        mastersongName.innerText=songs[songIndex].SongName
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        updatePlayPauseIcons();
    })
})
// next button
document.getElementById("next").addEventListener('click',()=>{
    // let ddd = document.getElementById(`${songIndex}`);
    // ddd.classList.remove('fa-pause-circle');
    // ddd.classList.add('fa-play-circle');
    if(songIndex>8){
        songIndex=0;
    }
    else{
        songIndex++;
    }
    
    // ddd = document.getElementById(`${songIndex}`);
    // ddd.classList.remove('fa-play-circle');
    // ddd.classList.add('fa-pause-circle');
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].SongName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    updatePlayPauseIcons();
})

//  back button

document.getElementById("back").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex--;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].SongName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    updatePlayPauseIcons();
})



