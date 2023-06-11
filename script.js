function QuoGen(){
    fetch('https://type.fit/api/quotes').then(response=>response.json()).then(data=>{
        console.log(data[1].text);
        let disPlayPar = document.getElementById('par');
        let random =  Math.floor(Math.random()*data.length);
        disPlayPar.innerText = data[random].text;
    })
}

let button = document.getElementById('Qbtn');
button.addEventListener('click', QuoGen);