

 async function getSongs(){
    let a = await fetch("./songs")
    let response = await a.text();
    // console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
    for(let index = 0; index < as.length; index++){
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    return songs
 }

 async function main(){
 let songs = await getSongs()
 console.log(songs)


 let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
   for(const song of songs){
    let Song = song.replaceAll("http://127.0.0.1:3001/songs/"," " )


    songUL.innerHTML = songUL.innerHTML + `<li>${Song.replaceAll("%20"," ")}</li>`;
 }

    var audio = new Audio(songs[0]);
    

    document.getElementById("Play").addEventListener("click",()=>{
        audio.play().catch((error)=>{
            console.error("Error ",error)
        })

        audio.addEventListener("ontimeupdate", () => {
            console.log(audio.duration,audio.currentSrc,audio.currentTime)
            // The duration variable now holds the duration (in seconds) of the audio clip
          });
    })
}

main()