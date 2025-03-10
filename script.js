


async function main(){

    let a = await fetch("http://192.168.1.33:60816/Downloads/songs/")
    let responses = await a.text()
    console.log(responses)
    let div = document.createElement("div")
    div.innerHTML = responses;
    let tds = div.getElementsByTagName("td")
    console.log(tds)
}

main()